import path from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import express from "express";
import nodemailer from "nodemailer";
import { validateContactForm } from "../src/utils/contactValidation.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const hasBuiltClient = existsSync(path.join(distDir, "index.html"));
const contactRecipient = process.env.CONTACT_TO_EMAIL || "joshuak23103@gmail.com";
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpUser = process.env.SMTP_USER;
const smtpSecure =
  process.env.SMTP_SECURE == null
    ? smtpPort === 465
    : String(process.env.SMTP_SECURE).toLowerCase() === "true";

function createMailTransporter() {
  const {
    SMTP_HOST,
    SMTP_PASS,
    SMTP_USER
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });
}

function formatReplyTo(submission) {
  return submission.name
    ? `"${submission.name.replace(/"/g, "'")}" <${submission.email}>`
    : submission.email;
}

function buildEmailContent(submission) {
  return [
    "New portfolio contact form submission",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Subject: ${submission.subject}`,
    `Submitted: ${submission.submittedAt}`,
    "",
    "Message:",
    submission.message
  ].join("\n");
}

const mailTransporter = createMailTransporter();

async function verifyMailTransporter() {
  if (!mailTransporter || !smtpUser) {
    return;
  }

  try {
    await mailTransporter.verify();
    console.log(`SMTP connection verified for ${smtpUser}.`);
  } catch (error) {
    if (error?.code === "EAUTH") {
      console.error(
        `SMTP authentication failed for ${smtpUser}. Make sure the Google App Password was created under this exact Gmail account.`
      );
      return;
    }

    console.error("SMTP verification failed:", error);
  }
}

const app = express();
const port = Number(process.env.PORT) || 3000;

app.disable("x-powered-by");
app.use((_, response, next) => {
  response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("X-Frame-Options", "DENY");
  next();
});

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

app.get("/api/health", (_, response) => {
  response.json({
    ok: true,
    timestamp: new Date().toISOString()
  });
});

app.post("/api/contact", async (request, response) => {
  const { data, errors, isValid } = validateContactForm(request.body ?? {});

  if (!isValid) {
    response.status(400).json({
      errors,
      message: "Please correct the highlighted fields and try again."
    });
    return;
  }

  const submission = {
    ...data,
    submittedAt: new Date().toISOString()
  };

  try {
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    const senderEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
    let handledByDeliveryService = false;

    if (mailTransporter && senderEmail) {
      const mailInfo = await mailTransporter.sendMail({
        from: `"Portfolio Contact Form" <${senderEmail}>`,
        replyTo: formatReplyTo(submission),
        subject: `Portfolio Contact: ${submission.subject}`,
        text: buildEmailContent(submission),
        to: contactRecipient
      });

      console.log("SMTP delivery accepted:", {
        accepted: mailInfo.accepted,
        messageId: mailInfo.messageId,
        rejected: mailInfo.rejected,
        response: mailInfo.response
      });

      handledByDeliveryService = true;
    }

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(submission)
      });

      if (!webhookResponse.ok) {
        response.status(502).json({
          message:
            "The message service is temporarily unavailable. Please try again shortly."
        });
        return;
      }
      handledByDeliveryService = true;
    }

    if (!handledByDeliveryService) {
      console.log("New contact form submission:");
      console.log(JSON.stringify(submission, null, 2));
    }

    response.status(200).json({
      message: "Thanks for reaching out. Your message was received successfully."
    });
  } catch (error) {
    console.error("Contact submission failed:", error);

    if (error?.code === "EAUTH") {
      response.status(502).json({
        message:
          `Email delivery is configured, but Gmail rejected the SMTP login for ${smtpUser || "the configured account"}. Make sure the Google App Password was created under that exact Gmail account and pasted into .env without spaces.`
      });
      return;
    }

    response.status(500).json({
      message: "Something went wrong while sending your message. Please try again."
    });
  }
});

if (hasBuiltClient) {
  app.use(express.static(distDir));

  app.get("/{*path}", (_, response) => {
    response.sendFile(path.join(distDir, "index.html"));
  });
} else {
  app.get("/{*path}", (_, response) => {
    response.status(200).json({
      ok: true,
      message:
        "Portfolio API server is running. Start Vite with `npm run dev` or build the frontend with `npm run build`."
    });
  });
}

app.listen(port, "0.0.0.0", () => {
  console.log(`Portfolio server running on http://localhost:${port}`);

  if (!hasBuiltClient) {
    console.log("No dist build found yet, so the server is exposing the API only.");
  }

  if (mailTransporter) {
    console.log(`SMTP email delivery enabled for ${contactRecipient}.`);
    if (smtpUser && smtpUser === contactRecipient) {
      console.log(
        "SMTP sender and recipient are the same Gmail account. Gmail may file self-sent messages under Sent or All Mail instead of showing them like a normal incoming inbox message."
      );
    }
    void verifyMailTransporter();
  } else {
    console.log(
      "SMTP email delivery is not configured yet. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS to enable email notifications."
    );
  }
});
