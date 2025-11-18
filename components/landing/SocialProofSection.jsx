import React from 'react';
import { Quote } from 'lucide-react';

export default function SocialProofSection() {
  const testimonials = [
    {
      quote: "We were quoted $60k/year for Crayon. BattleCard AI gives us the same intel for $199/month.",
      role: "VP Sales, Series B SaaS",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      quote: "Our sales team actually uses this. With Klue, battlecards sat in a dashboard no one opened. With Slack integration, adoption was instant.",
      role: "Head of Revenue Operations, Growth-Stage Startup",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      quote: "The depth is insane. I've compared it side-by-side with our old Kompyte battlecards—BattleCard AI is more comprehensive and updates in real-time.",
      role: "Product Marketing Manager, B2B Tech",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Teams Choose BattleCard AI
            <br />
            Over Enterprise Platforms
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
                {/* Quote icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center mb-6 opacity-90`}>
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Attribution */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust signals - Honest claims without requiring certifications */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Cancel anytime, no questions asked</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Data stays in your workspace</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}