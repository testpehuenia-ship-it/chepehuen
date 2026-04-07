import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/5492942000000?text=Hola,%20quisiera%20saber%20tarifas%20y%20disponibilidad" 
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} color="white" fill="white" />
    </a>
  );
}
