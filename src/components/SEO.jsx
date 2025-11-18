import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = "BattleCard AI - Enterprise Competitive Intelligence at 1/100th the Price",
  description = "AI-powered battlecards in minutes, not days. 20+ page deep-research battlecards for $199/month vs $60k/year. Slack-native competitive intelligence for startups.",
  keywords = "competitive intelligence, battlecards, crayon alternative, klue alternative, sales enablement, competitive analysis",
  ogImage = "https://battlecard.ai/og-image.jpg",
  url = "https://battlecard.ai"
}) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
