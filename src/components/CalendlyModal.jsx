import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function CalendlyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    if (!document.querySelector('link[href*="calendly"]')) {
      document.head.appendChild(link);
    }

    // Load and initialize Calendly script
    const loadCalendly = () => {
      if (window.Calendly) {
        // Calendly is already loaded, just initialize
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/connorprovines/30min',
          parentElement: document.querySelector('.calendly-inline-widget'),
        });
      } else {
        // Load Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          if (window.Calendly) {
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/connorprovines/30min',
              parentElement: document.querySelector('.calendly-inline-widget'),
            });
          }
        };
        document.body.appendChild(script);
      }
    };

    loadCalendly();
  }, [isOpen]);

  useEffect(() => {
    // Handle ESC key to close modal
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4"
      style={{ zIndex: 9999 }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative"
        style={{ height: '90vh', maxHeight: '700px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Calendly widget container */}
        <div
          className="calendly-inline-widget"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
