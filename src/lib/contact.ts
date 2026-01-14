// Contact information for Ovations
export const PHONE_NUMBER = "+27637941194";
export const PHONE_DISPLAY = "063 794 1194";
export const WHATSAPP_NUMBER = "27637941194"; // WhatsApp format (no + or spaces)

export const getPhoneLink = () => `tel:${PHONE_NUMBER}`;

export const getWhatsAppLink = (message?: string) => {
  const defaultMessage =
    "Hi Ovations! I'm interested in your branding services. I'd like to learn more about how you can help my business stand out.";

  const text = message?.trim() ? message : defaultMessage;

  // More broadly compatible than wa.me in some in-app browsers
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
};
