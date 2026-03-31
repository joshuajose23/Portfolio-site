import path from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import express from "express";
import {
  getMailConfigurationStatus,
  handleContactRequest,
  handleHealthRequest,
  verifyMailTransporter
} from "./apiHandlers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const hasBuiltClient = existsSync(path.join(distDir, "index.html"));
const { contactRecipient, hasMailTransporter, smtpUser } = getMailConfigurationStatus();

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

app.get("/api/health", handleHealthRequest);

app.post("/api/contact", handleContactRequest);

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

  if (hasMailTransporter) {
    console.log(`SMTP email delivery enabled for ${contactRecipient}.`);
    if (smtpUser && smtpUser === contactRecipient) {
      console.log(
        "SMTP sender and recipient are the same Gmail account. Gmail may file self-sent messages under Sent or All Mail instead of showing them like a normal incoming inbox message."
      );
    }
    void verifyMailTransporter(console);
  } else {
    console.log(
      "SMTP email delivery is not configured yet. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS to enable email notifications."
    );
  }
});
