import { handleHealthRequest } from "../server/apiHandlers.js";

export default function handler(request, response) {
  response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("X-Frame-Options", "DENY");

  handleHealthRequest(request, response);
}
