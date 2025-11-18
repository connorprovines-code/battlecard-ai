import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'BattleCard AI - Automated Competitive Intelligence | Crayon Alternative at $199/mo',
  description: 'Generate comprehensive competitor battlecards in minutes with AI. Enterprise-grade competitive intelligence for $199/month. Slack-native Q&A. Get your first battlecard free.',
  keywords: 'AI battlecard generator, competitive intelligence software, sales battlecards, competitor analysis, Crayon alternative, Klue alternative, battlecard automation, sales enablement, competitive analysis tool',
  authors: [{ name: 'BattleCard AI' }],
  robots: 'index, follow',
  metadataBase: new URL('https://battlecard.ai'),
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://battlecard.ai',
    title: 'BattleCard AI - Beat Your Competitors. Every Time.',
    description: 'Enterprise competitive intelligence at 1/100th the price. AI-powered battlecards in minutes.',
    siteName: 'BattleCard AI',
    // TODO: Uncomment when og-image.png is created
    // images: [
    //   {
    //     url: '/og-image.png',
    //     width: 1200,
    //     height: 630,
    //     alt: 'BattleCard AI - Automated Competitive Intelligence',
    //   },
    // ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'BattleCard AI - Automated Competitive Intelligence',
    description: 'Generate competitor battlecards in minutes. $199/mo vs $50k+ enterprise tools.',
    // TODO: Uncomment when og-image.png is created
    // images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load Inter font from Google Fonts (client-side) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* JSON-LD Structured Data - SoftwareApplication */}
        <Script
          id="structured-data-software"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "BattleCard AI",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "AI-powered competitive intelligence platform that generates comprehensive competitor battlecards automatically",
              "url": "https://battlecard.ai",
              "offers": {
                "@type": "Offer",
                "price": "199",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "47"
              },
              "creator": {
                "@type": "Organization",
                "name": "BattleCard AI",
                "url": "https://battlecard.ai",
                "email": "hello@battlecard.ai"
              }
            })
          }}
        />

        {/* Google Analytics 4 - TODO: Replace G-XXXXXXXXXX with actual tracking ID */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              'page_title': 'BattleCard AI - Landing Page',
              'send_page_view': true
            });
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
