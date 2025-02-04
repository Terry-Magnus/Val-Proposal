import emailjs from "@emailjs/browser";

export default function sendEmailNotification(recipientEmail: string) {
  const templateParams = {
    to_email: recipientEmail,
    message: "🎉 She said YES! ❤️",
  };

  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const api_key = import.meta.env.VITE_EMAIL_API_KEY;

  emailjs
    .send(service_id, template_id, templateParams, api_key)
    .then(() => {
      console.log("Email sent successfully:");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}
