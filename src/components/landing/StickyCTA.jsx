import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';
import { URLS } from '@/config/urls';

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user has previously dismissed the sticky CTA
    const isDismissed = sessionStorage.getItem('stickyCTADismissed');
    if (isDismissed) {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling 50% of viewport height
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.5;

      if (scrollPosition > triggerPoint) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('stickyCTADismissed', 'true');
  };

  // Don't render if dismissed
  if (dismissed || !show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl p-4 z-50 animate-in slide-in-from-bottom duration-300"
      role="dialog"
      aria-label="Call to action"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Message */}
        <div className="flex-1 text-center sm:text-left">
          <div className="font-bold text-gray-900 text-lg">Ready to beat your competitors?</div>
          <div className="text-sm text-gray-600">Get your first battlecard free • No credit card required</div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() => window.open(URLS.CALENDLY_BOOKING, '_blank')}
          >
            Book Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
