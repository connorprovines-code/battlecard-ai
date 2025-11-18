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

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">SOC 2 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">GDPR Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">99.9% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
}