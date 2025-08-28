import React from 'react';
import { MessageCircle } from 'lucide-react';

/**
 * WhatsAppButton Component
 * 
 * Floating action button (FAB) that appears on all pages
 * Provides quick access to WhatsApp contact for immediate customer support
 * 
 * Features:
 * - Fixed positioning in bottom-right corner
 * - Hover animations and scaling effects
 * - Pulse animation to draw attention
 * - Opens WhatsApp with pre-filled number
 */
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2349161791708" // Real WhatsApp number from provided content
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 transform animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;