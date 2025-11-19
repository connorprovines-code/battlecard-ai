import React from 'react';
import { Helmet } from 'react-helmet-async';

// Article Schema for blog posts
export function ArticleSchema({
  headline,
  description,
  datePublished = "2025-01-18",
  dateModified = "2025-01-18",
  url,
  imageUrl = "https://www.battlecardhq.com/og-image.jpg"
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": headline,
    "description": description,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": "BattleCard AI Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BattleCard AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.battlecardhq.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// Organization Schema for homepage
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BattleCard AI",
    "alternateName": "BattleCard AI",
    "url": "https://www.battlecardhq.com",
    "logo": "https://www.battlecardhq.com/logo.png",
    "description": "AI-powered competitive intelligence platform delivering 20+ page battlecards at 1/100th the cost of enterprise solutions like Crayon and Klue.",
    "foundingDate": "2025",
    "sameAs": [
      "https://twitter.com/battlecardai",
      "https://linkedin.com/company/battlecardai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "url": "https://www.battlecardhq.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "199",
        "priceCurrency": "USD",
        "billingDuration": "P1M"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// Software Application Schema for product pages
export function SoftwareSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BattleCard AI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
