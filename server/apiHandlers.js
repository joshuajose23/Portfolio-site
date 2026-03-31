import nodemailer from "nodemailer";
import { validateContactForm } from "../src/utils/contactValidation.js";

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

async function readRequestBody(request) {
  if (request.body == null) {
    return {};
  }

  if (typeof request.body === "string") {
    try {
      return JSON.parse(request.body);
    } catch {
      return {};
    }
  }

  if (request.body instanceof Uint8Array || Buffer.isBuffer(request.body)) {
    try {
      return JSON.parse(Buffer.from(request.body).toString("utf8"));
    } catch {
      return {};
    }
  }

  return request.body;
}

const mailTransporter = createMailTransporter();

export function getMailConfigurationStatus() {
  return {
    contactRecipient,
    hasMailTransporter: Boolean(mailTransporter),
    smtpUser
  };
}

export async function verifyMailTransporter(logger = console) {
  if (!mailTransporter || !smtpUser) {
    return;
  }

  try {
    await mailTransporter.verify();
    logger.log(`SMTP connection verified for ${smtpUser}.`);
  } catch (error) {
    if (error?.code === "EAUTH") {
      logger.error(
        `SMTP authentication failed for ${smtpUser}. Make sure the Google App Password was created under this exact Gmail account.`
      );
      return;
    }

    logger.error("SMTP verification failed:", error);
  }
}

export function handleHealthRequest(_, response) {
  response.status(200).json({
    ok: true,
    timestamp: new Date().toISOString()
  });
}

export async function handleContactRequest(request, response, logger = console) {
  const activeLogger =
    logger &&
    typeof logger === "object" &&
    typeof logger.log === "function" &&
    typeof logger.error === "function"
      ? logger
      : console;

  if (request.method && request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({
      message: "Method not allowed."
    });
    return;
  }

  const payload = await readRequestBody(request);
  const { data, errors, isValid } = validateContactForm(payload);

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

      activeLogger.log("SMTP delivery accepted:", {
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
      activeLogger.log("New contact form submission:");
      activeLogger.log(JSON.stringify(submission, null, 2));
    }

    response.status(200).json({
      message: "Thanks for reaching out. Your message was received successfully."
    });
  } catch (error) {
    activeLogger.error("Contact submission failed:", error);

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
}
