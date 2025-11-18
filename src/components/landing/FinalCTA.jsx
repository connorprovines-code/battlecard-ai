import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-8">
          <Sparkles className="w-10 h-10 text-white" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Stop Losing Deals You Should Win
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Get your first competitor battlecard free. No credit card. No commitment. See the depth yourself.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-6">
          <Button 
            size="lg"
            className="text-lg px-12 py-7 bg-white text-indigo-600 hover:bg-gray-50 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            Get Your First Battlecard Free
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>

          <p className="text-indigo-200 text-sm">
            Takes 2 minutes to set up. Instant Slack integration. Cancel anytime.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-4xl font-bold mb-2">2 mins</div>
            <div className="text-indigo-200">Setup time</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">$58k+</div>
            <div className="text-indigo-200">Saved vs. Crayon</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">20+ Pages</div>
            <div className="text-indigo-200">Research per card</div>
          </div>
        </div>
      </div>
    </section>
  );
}