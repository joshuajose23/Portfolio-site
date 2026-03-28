import path from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import express from "express";
import { validateContactForm } from "../src/utils/contactValidation.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const hasBuiltClient = existsSync(path.join(distDir, "index.html"));

const app = express();
const port = Number(process.env.PORT) || (hasBuiltClient ? 3000 : 3001);

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
    } else {
      console.log("New contact form submission:");
      console.log(JSON.stringify(submission, null, 2));
    }

    response.status(200).json({
      message: "Thanks for reaching out. Your message was received successfully."
    });
  } catch (error) {
    console.error("Contact submission failed:", error);

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

app.listen(port, () => {
  console.log(`Portfolio server running on http://localhost:${port}`);

  if (!hasBuiltClient) {
    console.log("No dist build found yet, so the server is exposing the API only.");
  }
});
