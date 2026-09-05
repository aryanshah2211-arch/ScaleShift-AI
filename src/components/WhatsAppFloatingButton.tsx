import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5"
    >
      {/* Tooltip on hover */}
      <div
        className={`px-3 py-1.5 rounded-sm bg-[#1A1A1A] text-white text-xs font-mono font-medium shadow-md transition-all duration-200 pointer-events-none hidden sm:block ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        Chat with Aryan
      </div>

      {/* Button */}
      <a
        id="floating-whatsapp-btn"
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-12 h-12 rounded-full bg-[#2C4A3E] hover:bg-[#223B32] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2C4A3E]"
        aria-label="Chat directly with Aryan on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="sr-only">Chat with Aryan on WhatsApp</span>
      </a>
    </aside>
  );
};
