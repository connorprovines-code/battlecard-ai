import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign, Clock, MessageSquare, Database } from 'lucide-react';
import Footer from '../components/landing/Footer';
import CalendlyModal from '../components/CalendlyModal';
import SEO from '../components/SEO';

export default function KlueAlternative() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const comparison = [
    {
      feature: "Annual Cost",
      klue: "$50,000 - $100,000+",
      battlecard: "$2,388",
      winner: "battlecard"
    },
    {
      feature: "Research Depth",
      klue: "Concise summaries (2,000 char limits)",
      battlecard: "20+ page comprehensive research",
      winner: "battlecard"
    },
    {
      feature: "Setup Time",
      klue: "4-6 weeks implementation",
      battlecard: "2 minutes",
      winner: "battlecard"
    },
    {
      feature: "User Adoption",
      klue: "Requires team to check separate platform",
      battlecard: "Slack-native, instant adoption",
      winner: "battlecard"
    },
    {
      feature: "Battlecard Creation",
      klue: "60 seconds with Ask Klue AI",
      battlecard: "Minutes, fully automated",
      winner: "tie"
    },
    {
      feature: "Competitive Positioning",
      klue: "Highlights your strengths",
      battlecard: "Honest win/loss analysis (shows where you win AND lose)",
      winner: "battlecard"
    },
    {
      feature: "Best For",
      klue: "Enterprise teams with dedicated CI roles",
      battlecard: "Lean startups & SMBs (50-500)",
      winner: "tie"
    }
  ];

  const reasons = [
    {
      icon: DollarSign,
      title: "96% Cost Savings",
      description: "Klue costs $50k-$100k annually. BattleCard AI costs $199/month ($2,388/year). Get the same competitive intelligence, actually deeper research, without the enterprise pricing."
    },
    {
      icon: Database,
      title: "No Character Limits",
      description: "Klue limits sections to 2,000 characters for 'optimal engagement.' We don't artificially limit depth. Our battlecards contain 20+ pages of comprehensive research, full review mining, and detailed competitive analysis."
    },
    {
      icon: MessageSquare,
      title: "Zero Adoption Friction",
      description: "Klue requires your team to open another platform. With BattleCard AI, they just ask questions in Slack and get instant answers. No logins, no dashboards, no adoption campaigns."
    },
    {
      icon: Clock,
      title: "2 Minutes vs 6 Weeks",
      description: "Klue requires weeks of onboarding, training, and content migration. BattleCard AI takes 2 minutes: connect Slack, mention a competitor, done. Start getting intel immediately."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      <SEO
        title="Klue Alternative: Deeper Research, No Character Limits, 96% Lower Cost | BattleCard AI"
        description="Get 20+ page battlecards vs Klue's 2,000 character limits. Slack-native, $199/month vs $60k/year. Zero adoption friction, instant setup."
        keywords="klue alternative, klue competitor, competitive intelligence platform, klue pricing alternative, battlecard software"
        url="https://www.battlecardhq.com/klue-alternative"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                Klue Alternative
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Competitive Intelligence Without{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Character Limits or Enterprise Pricing
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Klue is great if you're enterprise and can afford $50k+/year. BattleCard AI delivers deeper research (20+ pages vs 2,000 character limits), lives in Slack where your team already works, and costs 96% less.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl"
                onClick={() => setCalendlyOpen(true)}
              >
                Get Your First Battlecard Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Save $58,000+ per year • 2-minute setup • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Why Switch Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Teams Are Switching from Klue
            </h2>
            <p className="text-xl text-gray-600">
              Deeper research. Better adoption. Startup-friendly pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              BattleCard AI vs Klue: Side-by-Side
            </h2>
            <p className="text-xl text-gray-600">
              Feature-by-feature comparison
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-slate-50">
                  <th className="px-8 py-6 text-left text-lg font-bold text-gray-900">Feature</th>
                  <th className="px-8 py-6 text-center text-lg font-bold text-gray-600">Klue</th>
                  <th className="px-8 py-6 text-center text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    BattleCard AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-t border-gray-200 ${item.winner === 'battlecard' ? 'bg-indigo-50' : ''} hover:bg-gray-50 transition-colors`}
                  >
                    <td className="px-8 py-6 font-medium text-gray-900">
                      {item.feature}
                    </td>
                    <td className="px-8 py-6 text-center text-gray-600">
                      {item.klue}
                    </td>
                    <td className="px-8 py-6 text-center font-semibold text-indigo-600">
                      {item.battlecard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {comparison.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="font-bold text-gray-900 mb-4">{item.feature}</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Klue</div>
                    <div className="text-gray-700 text-sm">{item.klue}</div>
                  </div>
                  <div>
                    <div className="text-sm text-indigo-600 font-medium mb-2">BattleCard AI</div>
                    <div className="text-indigo-600 font-semibold text-sm">{item.battlecard}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Customer Quote */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 border border-indigo-100">
            <svg className="w-12 h-12 text-indigo-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl text-gray-900 font-medium mb-6 italic leading-relaxed">
              "Our sales team actually uses this. With Klue, battlecards sat in a dashboard no one opened. With Slack integration, adoption was instant. And the research depth blows away Klue's 2,000 character limit per section."
            </p>
            <p className="text-gray-600 font-medium">
              Head of Revenue Operations, Growth-Stage Startup
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Deeper Intel at 1/100th the Price?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Get your first competitor battlecard free. See the research depth yourself. No credit card required.
          </p>
          <Button
            size="lg"
            className="text-lg px-12 py-7 bg-white text-indigo-600 hover:bg-gray-50 shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => setCalendlyOpen(true)}
          >
            Get Your First Battlecard Free
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          <p className="mt-6 text-indigo-200">
            2-minute setup • Cancel anytime • No enterprise contracts
          </p>
        </div>
      </section>

      <CalendlyModal isOpen={calendlyOpen} onClose={() => setCalendlyOpen(false)} />

      <Footer />
    </div>
  );
}
