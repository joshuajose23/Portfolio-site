import { useState } from "react";
import {
  emptyContactForm,
  validateContactForm
} from "../utils/contactValidation.js";

const initialStatus = {
  kind: "",
  message: ""
};

async function readResponsePayload(response) {
  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();

  return {
    message: text || "The server returned an unexpected response."
  };
}

export function useContactForm() {
  const [formData, setFormData] = useState(emptyContactForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successCount, setSuccessCount] = useState(0);
  const [status, setStatus] = useState(initialStatus);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));

    setStatus((current) => (
      current.kind === "success"
        ? initialStatus
        : current
    ));

    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, errors: validationErrors, isValid } = validateContactForm(formData);

    if (!isValid) {
      setErrors(validationErrors);
      setStatus({
        kind: "error",
        message: "Please fix the highlighted fields before sending your message."
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({
      kind: "",
      message: "Sending your message..."
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const payload = await readResponsePayload(response);

      if (!response.ok) {
        setErrors(payload.errors ?? {});
        setStatus({
          kind: "error",
          message:
            payload.message ??
            "The message service is unavailable right now. Please try again shortly."
        });
        return;
      }

      setFormData(emptyContactForm);
      setErrors({});
      setStatus({
        kind: "success",
        message: payload.message
      });
      setSuccessCount((current) => current + 1);
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          "The contact service could not be reached right now. If the site is hosted, make sure the backend server is running and publicly accessible."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    errors,
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    successCount,
    status
  };
}
