import React, { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState('');
  const [competitor, setCompetitor] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('exitIntentShown');
    if (hasSeenPopup) {
      setDismissed(true);
      return;
    }

    const handleMouseLeave = (e) => {
      // Detect when mouse leaves the top of the viewport (attempting to close/navigate away)
      if (e.clientY <= 0 && !showPopup && !dismissed) {
        setShowPopup(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Add event listener after a short delay to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [showPopup, dismissed]);

  const handleClose = () => {
    setShowPopup(false);
    setDismissed(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Integrate with your email collection service (e.g., ConvertKit, Mailchimp, etc.)
    console.log('Email capture:', { email, competitor });

    // For now, just show success message
    setSubmitted(true);

    // Close popup after 2 seconds
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (!showPopup) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Popup Modal */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 animate-in zoom-in-95 duration-300"
        role="dialog"
        aria-labelledby="exit-intent-title"
        aria-modal="true"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 relative border-2 border-gray-200">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {!submitted ? (
            <>
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Header */}
              <h2 id="exit-intent-title" className="text-3xl font-bold text-gray-900 mb-3 text-center">
                Wait! Get a Free Battlecard
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Enter your email and your top competitor. We'll send you a free sample battlecard in 24 hours.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="exit-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    id="exit-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="exit-competitor" className="block text-sm font-medium text-gray-700 mb-2">
                    Top Competitor Name
                  </label>
                  <input
                    id="exit-competitor"
                    type="text"
                    required
                    placeholder="e.g., HubSpot, Salesforce, etc."
                    value={competitor}
                    onChange={(e) => setCompetitor(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Free Battlecard
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  No credit card required. We'll never spam you.
                </p>
              </form>
            </>
          ) : (
            /* Success Message */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">You're all set!</h3>
              <p className="text-gray-600">
                We'll send your free battlecard for <strong>{competitor}</strong> to{' '}
                <strong>{email}</strong> within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
