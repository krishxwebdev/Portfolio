const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

/**
 * Sends a contact form message to the Express + MySQL backend.
 * @param {Object} formData - { name: string, email: string, message: string }
 * @returns {Promise}
 */
export async function sendContactEmail(formData) {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Failed to send message.");
  }

  return data;
}
