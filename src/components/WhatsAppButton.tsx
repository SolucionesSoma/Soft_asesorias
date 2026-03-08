import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '573013437402'; // Replace with actual number
  const message = 'Hola, estoy interesado en adquirir sus servicios';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-xl whitespace-nowrap shadow-lg">
          ¿Necesitas ayuda?
          <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800" />
        </div>
      </div>

      {/* Button */}
      <div className="relative">
        {/* Pulse animation rings */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50" style={{ animationDuration: '2s' }} />
        
        {/* Main button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group-hover:rotate-12">
          <MessageCircle className="w-8 h-8 text-white fill-white" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
