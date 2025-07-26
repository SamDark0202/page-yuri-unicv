import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/559220201260?text=Olá!%20Vim%20pelo%20Yuri%20Sampaio%20e%20quero%20saber%20sobre%20a%20bolsa%20de%2040%25!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;