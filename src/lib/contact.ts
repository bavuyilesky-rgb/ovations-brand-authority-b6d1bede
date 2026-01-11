// Contact information for Ovations
// Replace these with actual contact details

export const PHONE_NUMBER = "+27123456789"; // Replace with actual phone number
export const WHATSAPP_NUMBER = "27123456789"; // WhatsApp format (no + or spaces)

export const getPhoneLink = () => `tel:${PHONE_NUMBER}`;

export const getWhatsAppLink = (message?: string) => {
  const defaultMessage = encodeURIComponent(
    "Hi Ovations! I'm interested in your branding services. I'd like to learn more about how you can help my business stand out."
  );
  const encodedMessage = message ? encodeURIComponent(message) : defaultMessage;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
