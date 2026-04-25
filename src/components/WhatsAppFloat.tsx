import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/525548415148?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización%20de%20transporte"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="whatsapp-pulse fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-elegant transition-transform hover:scale-110"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </a>
  );
};

export default WhatsAppFloat;
