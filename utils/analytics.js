/**
 * Google Analytics tracking utilities
 * Helps track user interactions and conversions
 */

/**
 * Track CTA button clicks
 * @param {string} label - Identifier for which CTA was clicked (e.g., 'hero_cta', 'pricing_cta')
 * @param {string} location - Section location (e.g., 'hero', 'pricing', 'final_cta')
 */
export const trackCTAClick = (label, location = '') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_cta', {
      event_category: 'engagement',
      event_label: label,
      location: location,
    });
  }
};

/**
 * Track form submissions
 * @param {string} formName - Name of the form (e.g., 'exit_intent_email', 'demo_request')
 */
export const trackFormSubmit = (formName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label: formName,
    });
  }
};

/**
 * Track outbound link clicks
 * @param {string} url - The destination URL
 * @param {string} linkText - Text or identifier for the link
 */
export const trackOutboundClick = (url, linkText = '') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: linkText,
      destination_url: url,
    });
  }
};

/**
 * Track video plays
 * @param {string} videoId - Identifier for the video
 */
export const trackVideoPlay = (videoId) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'video_play', {
      event_category: 'engagement',
      event_label: videoId,
    });
  }
};

/**
 * Track scroll depth
 * @param {number} percentage - How far user scrolled (e.g., 25, 50, 75, 100)
 */
export const trackScrollDepth = (percentage) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      value: percentage,
    });
  }
};
