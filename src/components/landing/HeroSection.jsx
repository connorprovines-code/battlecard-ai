import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Gradient orbs in background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Copy */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                $199/month · No enterprise tax
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Beat Your Competitors.{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Every Time.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              AI-powered battlecards in minutes, not days. Enterprise competitive intelligence at 1/100th the price.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                Get Your First Battlecard Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-gray-50"
                onClick={() => scrollToSection('demo')}
              >
                <Play className="mr-2 w-5 h-5" />
                See How It Works
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                2-minute setup
              </div>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              {/* Slack Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                  #
                </div>
                <div>
                  <div className="font-semibold text-gray-900">sales-intel</div>
                  <div className="text-xs text-gray-500">12 members</div>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    JS
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-semibold text-gray-900 text-sm">Jake Smith</span>
                      <span className="text-xs text-gray-500">2:34 PM</span>
                    </div>
                    <div className="text-gray-700">What's HubSpot's biggest weakness?</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    BC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-semibold text-gray-900 text-sm">BattleCard AI</span>
                      <span className="text-xs text-indigo-600 font-medium">BOT</span>
                      <span className="text-xs text-gray-500">2:34 PM</span>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-100">
                      <div className="font-semibold text-gray-900 mb-2">🎯 HubSpot Competitive Intel</div>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div>
                          <span className="font-medium">Biggest Weakness:</span> Complex pricing & forced bundling. SMBs get priced out fast.
                        </div>
                        <div className="mt-3 pt-3 border-t border-indigo-200">
                          <div className="font-medium mb-1">🥊 Attack Angles:</div>
                          <ul className="space-y-1 ml-4 text-xs">
                            <li>→ Transparent $199/mo vs their $800+ starter</li>
                            <li>→ No forced feature bundles</li>
                            <li>→ 2-min setup vs 6-week onboarding</li>
                          </ul>
                        </div>
                        <div className="mt-3 pt-3 border-t border-indigo-200">
                          <div className="font-medium mb-1">❓ Discovery Questions:</div>
                          <ul className="space-y-1 ml-4 text-xs">
                            <li>→ "Are you paying for features you don't use?"</li>
                            <li>→ "How long did HubSpot take to implement?"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                  </div>
                  <span>Analyzing competitor data...</span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Instant Intel</div>
                  <div className="text-sm text-gray-600">20+ pages per card</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}