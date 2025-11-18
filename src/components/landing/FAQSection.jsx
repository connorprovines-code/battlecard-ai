import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does the Slack integration work?",
      answer: "Once connected, mention any competitor in your Slack workspace and our bot automatically generates a comprehensive battlecard. Ask follow-up questions anytime and get instant answers."
    },
    {
      question: "Can I use BattleCard AI without Slack?",
      answer: "Currently, BattleCard AI is Slack-native for maximum team adoption. We're building a web dashboard for Q2 2025. Contact us if you need early access."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "You retain access to all battlecards in your Notion workspace. Your data is yours forever. We delete workspace connections within 30 days of cancellation."
    },
    {
      question: "Do you integrate with Salesforce or HubSpot?",
      answer: "Not yet. Our roadmap includes CRM integrations in Q3 2025. For now, battlecards live in Notion and are accessible via Slack."
    },
    {
      question: "How accurate is the competitive intelligence?",
      answer: "We combine live web scraping, customer review analysis (G2, Capterra), and AI-powered synthesis. Each battlecard cites sources. We recommend manual review for mission-critical claims."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! Book a demo and we'll generate a free battlecard for your top competitor. No credit card required. Experience the depth before committing."
    },
    {
      question: "What's included in the $199/month plan?",
      answer: "Unlimited battlecard generation, real-time Slack Q&A, automatic updates, Notion integration, and 'compare mode' to pit competitors against each other."
    },
    {
      question: "How is this different from ChatGPT?",
      answer: "ChatGPT gives generic answers. BattleCard AI uses 40k+ token context windows, live web scraping, customer review mining, and a structured 9-section framework designed for sales teams. Our battlecards include tactical discovery questions and competitive attack angles you won't get from ChatGPT."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema markup for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-white">
      {/* FAQ Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about BattleCard AI
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:border-indigo-200 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-2xl"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below FAQs */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:hello@battlecard.ai"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
          >
            Contact us at hello@battlecard.ai
          </a>
        </div>
      </div>
    </section>
  );
}
