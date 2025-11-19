import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, X } from 'lucide-react';
import Footer from '../components/landing/Footer';
import CalendlyModal from '../components/CalendlyModal';
import SEO from '../components/SEO';

export default function CrayonVsKlue() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const comparison = [
    {
      category: "Pricing",
      crayon: "$50k-$100k+/year",
      klue: "$50k-$100k+/year",
      battlecard: "$2,388/year ($199/mo)",
      winner: "battlecard"
    },
    {
      category: "Research Depth",
      crayon: "1-2 page summaries",
      klue: "Limited sections (2,000 char max)",
      battlecard: "20+ page comprehensive research",
      winner: "battlecard"
    },
    {
      category: "Setup Time",
      crayon: "6-8 weeks",
      klue: "4-6 weeks",
      battlecard: "2 minutes",
      winner: "battlecard"
    },
    {
      category: "User Interface",
      crayon: "Separate dashboard",
      klue: "Separate dashboard",
      battlecard: "Slack-native",
      winner: "battlecard"
    },
    {
      category: "Battlecard Creation Speed",
      crayon: "Quick with templates",
      klue: "60 seconds with Ask Klue AI",
      battlecard: "Minutes, fully automated",
      winner: "tie"
    },
    {
      category: "Real-Time Updates",
      crayon: "Yes",
      klue: "Yes",
      battlecard: "Yes",
      winner: "tie"
    },
    {
      category: "Review Data Mining",
      crayon: "Limited",
      klue: "Limited",
      battlecard: "Full review mining (G2, Capterra, etc.)",
      winner: "battlecard"
    },
    {
      category: "Maintenance Required",
      crayon: "Heavy manual effort",
      klue: "Moderate",
      battlecard: "Fully automated",
      winner: "battlecard"
    },
    {
      category: "Best For",
      crayon: "Enterprise (500+)",
      klue: "Enterprise with CI teams",
      battlecard: "Startups & SMBs (50-500)",
      winner: "depends"
    }
  ];

  const prosConsData = [
    {
      name: "Crayon",
      color: "orange",
      pros: [
        "Established platform with proven track record",
        "Comprehensive competitive intelligence features",
        "Good templates for quick battlecard creation",
        "Strong enterprise support"
      ],
      cons: [
        "$50k-$100k+ annual cost",
        "Requires significant manual maintenance",
        "6-8 week implementation timeline",
        "1-2 page battlecard depth limits",
        "Another dashboard for teams to check"
      ]
    },
    {
      name: "Klue",
      color: "blue",
      pros: [
        "Best-in-class battlecard quality (G2 score: 9.5)",
        "Ask Klue AI for rapid content generation",
        "Strong competitive intelligence framework",
        "Win-loss interview integration"
      ],
      cons: [
        "$50k-$100k+ annual cost",
        "2,000 character limits per section",
        "4-6 week implementation required",
        "Requires team to adopt separate platform",
        "Better suited for enterprise"
      ]
    },
    {
      name: "BattleCard AI",
      color: "indigo",
      pros: [
        "$199/month pricing (96% cheaper)",
        "20+ page comprehensive research",
        "2-minute setup time",
        "Slack-native (instant adoption)",
        "Full review data mining",
        "Fully automated updates"
      ],
      cons: [
        "Newer platform (less established)",
        "Best for startups/SMBs vs large enterprise",
        "Limited to Slack for primary interface"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      <SEO
        title="Crayon vs Klue vs BattleCard AI: Complete Comparison 2025"
        description="Side-by-side comparison of Crayon, Klue, and BattleCard AI. Compare pricing ($60k vs $199/mo), features, research depth, and find the best fit for your team."
        keywords="crayon vs klue, competitive intelligence comparison, battlecard software comparison, crayon klue alternative"
        url="https://www.battlecardhq.com/crayon-vs-klue"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crayon vs Klue vs{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                BattleCard AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              A complete comparison of the three leading competitive intelligence platforms in 2025. See which one is right for your team.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Crayon</h3>
              <p className="text-gray-600 mb-4">Enterprise-grade competitive intelligence with comprehensive features.</p>
              <div className="text-3xl font-bold text-orange-600 mb-2">$60k+/year</div>
              <p className="text-sm text-gray-500">Best for: Enterprise (500+ employees)</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Klue</h3>
              <p className="text-gray-600 mb-4">Highest-rated battlecards with strong CI framework and AI features.</p>
              <div className="text-3xl font-bold text-blue-600 mb-2">$60k+/year</div>
              <p className="text-sm text-gray-500">Best for: Enterprise with CI teams</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">BattleCard AI</h3>
              <p className="text-gray-600 mb-4">Deep research with Slack-native access at startup-friendly pricing.</p>
              <div className="text-3xl font-bold text-indigo-600 mb-2">$2.4k/year</div>
              <p className="text-sm text-gray-500">Best for: Startups & SMBs (50-500)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Feature-by-Feature Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See how all three platforms stack up
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-slate-50">
                  <th className="px-6 py-5 text-left text-base font-bold text-gray-900">Feature</th>
                  <th className="px-6 py-5 text-center text-base font-bold text-orange-600">Crayon</th>
                  <th className="px-6 py-5 text-center text-base font-bold text-blue-600">Klue</th>
                  <th className="px-6 py-5 text-center text-base font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
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
                    <td className="px-6 py-5 font-medium text-gray-900">
                      {item.category}
                    </td>
                    <td className="px-6 py-5 text-center text-gray-600 text-sm">
                      {item.crayon}
                    </td>
                    <td className="px-6 py-5 text-center text-gray-600 text-sm">
                      {item.klue}
                    </td>
                    <td className={`px-6 py-5 text-center text-sm ${item.winner === 'battlecard' ? 'font-semibold text-indigo-600' : 'text-gray-600'}`}>
                      {item.battlecard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {comparison.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="font-bold text-gray-900 mb-4 text-lg">{item.category}</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-orange-600 font-medium">Crayon:</span>
                    <span className="text-sm text-gray-700 text-right flex-1 ml-3">{item.crayon}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-blue-600 font-medium">Klue:</span>
                    <span className="text-sm text-gray-700 text-right flex-1 ml-3">{item.klue}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-indigo-600 font-medium">BattleCard AI:</span>
                    <span className={`text-sm text-right flex-1 ml-3 ${item.winner === 'battlecard' ? 'font-semibold text-indigo-600' : 'text-gray-700'}`}>
                      {item.battlecard}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pros & Cons
            </h2>
            <p className="text-xl text-gray-600">
              Honest assessment of each platform
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {prosConsData.map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <h3 className={`text-2xl font-bold mb-6 ${
                  platform.color === 'orange' ? 'text-orange-600' :
                  platform.color === 'blue' ? 'text-blue-600' :
                  'text-indigo-600'
                }`}>
                  {platform.name}
                </h3>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {platform.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-gray-600 pl-7">• {pro}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {platform.cons.map((con, i) => (
                      <li key={i} className="text-sm text-gray-600 pl-7">• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which One to Choose */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Which One Should You Choose?
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-600 mb-3">Choose Crayon if...</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You're an enterprise with 500+ employees</li>
                <li>• You need comprehensive CI features beyond battlecards</li>
                <li>• You have budget for $60k+ annual software spend</li>
                <li>• You prefer established, proven platforms</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-3">Choose Klue if...</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You have a dedicated competitive intelligence team</li>
                <li>• You need best-in-class battlecard features (G2 rating: 9.5)</li>
                <li>• You value win-loss interview integration</li>
                <li>• You have enterprise budget and timeline for implementation</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-indigo-300 shadow-xl">
              <h3 className="text-2xl font-bold text-indigo-600 mb-3">Choose BattleCard AI if...</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You're a startup or SMB (50-500 employees)</li>
                <li>• You need deeper research (20+ pages) than 1-2 page summaries</li>
                <li>• You want Slack-native access for instant adoption</li>
                <li>• You need to save $58k+/year on CI software</li>
                <li>• You need to start getting intel in 2 minutes, not 6-8 weeks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Try BattleCard AI Free
          </h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Get your first competitor battlecard free. See why teams are switching from Crayon and Klue.
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
            No credit card required • 2-minute setup • Cancel anytime
          </p>
        </div>
      </section>

      <CalendlyModal isOpen={calendlyOpen} onClose={() => setCalendlyOpen(false)} />

      <Footer />
    </div>
  );
}
