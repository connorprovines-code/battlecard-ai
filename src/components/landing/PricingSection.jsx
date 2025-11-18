import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  const features = [
    "Unlimited battlecard generation",
    "Real-time Slack Q&A",
    "Deep-research battlecards (20+ pages)",
    "Automatic updates & monitoring",
    "Notion knowledge base integration",
    "Compare mode (you vs. competitor)"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparent Pricing.
            <br />
            <span className="text-gray-600">No Enterprise Tax.</span>
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium mb-6">
                <span>🔥</span>
                Most Popular
              </div>

              {/* Plan name */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">BattleCard AI</h3>
              
              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">$199</span>
                  <span className="text-2xl text-gray-500">/month</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                size="lg"
                className="w-full text-lg py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                Get Your First Battlecard Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                First battlecard on us. No credit card required. See the depth before you commit.
              </p>
            </div>
          </div>

          {/* Value comparison */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl px-6 py-4 border border-green-200">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-left">
                <div className="font-bold text-gray-900">Save $58,000+ per year</div>
                <div className="text-sm text-gray-600">vs. Crayon & Klue enterprise pricing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}