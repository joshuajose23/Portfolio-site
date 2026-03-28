export const emptyContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sanitizeContactForm(values = {}) {
  return {
    name: String(values.name ?? "").trim(),
    email: String(values.email ?? "").trim(),
    subject: String(values.subject ?? "").trim(),
    message: String(values.message ?? "").trim(),
    website: String(values.website ?? "").trim()
  };
}

export function validateContactForm(values = {}) {
  const data = sanitizeContactForm(values);
  const errors = {};

  if (data.website) {
    errors.website = "Please leave this field empty.";
  }

  if (data.name.length < 2) {
    errors.name = "Please enter at least 2 characters for your name.";
  } else if (data.name.length > 80) {
    errors.name = "Please keep your name under 80 characters.";
  }

  if (!emailPattern.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.subject.length < 3) {
    errors.subject = "Please add a short subject line.";
  } else if (data.subject.length > 120) {
    errors.subject = "Please keep the subject under 120 characters.";
  }

  if (data.message.length < 20) {
    errors.message = "Please share a bit more detail in your message.";
  } else if (data.message.length > 1500) {
    errors.message = "Please keep the message under 1500 characters.";
  }

  return {
    data,
    errors,
    isValid: Object.keys(errors).length === 0
  };
}
