import { useState } from "react";
import {
  emptyContactForm,
  validateContactForm
} from "../utils/contactValidation.js";

const initialStatus = {
  kind: "",
  message: "The form posts to the Express backend with client and server validation."
};

export function useContactForm() {
  const [formData, setFormData] = useState(emptyContactForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(initialStatus);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));

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

      const payload = await response.json();

      if (!response.ok) {
        setErrors(payload.errors ?? {});
        setStatus({
          kind: "error",
          message:
            payload.message ??
            "Something went wrong while sending your message. Please try again."
        });
        return;
      }

      setFormData(emptyContactForm);
      setErrors({});
      setStatus({
        kind: "success",
        message: payload.message
      });
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          "The server could not be reached right now. Please try again in a moment."
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
    status
  };
}
