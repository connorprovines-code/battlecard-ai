import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/landing/Footer';
import SEO from '../components/SEO';

export default function Competitors() {
  const competitors = [
    {
      name: "Crayon",
      tagline: "Established enterprise CI platform",
      price: "$50k-$100k+/year",
      setupTime: "6-8 weeks",
      depth: "1-2 page summaries",
      interface: "Separate dashboard",
      bestFor: "Enterprise (500+ employees)",
      pros: ["Comprehensive features", "Proven track record", "Strong support"],
      cons: ["Very expensive", "Heavy manual maintenance", "Long implementation"],
      link: "/crayon-alternative"
    },
    {
      name: "Klue",
      tagline: "Highest-rated battlecards (G2: 9.5)",
      price: "$50k-$100k+/year (~$1k/user)",
      setupTime: "4-6 weeks",
      depth: "Limited sections (2k char max)",
      interface: "Separate dashboard",
      bestFor: "Enterprise with CI teams",
      pros: ["Best-in-class battlecards", "Ask Klue AI", "Win-loss integration"],
      cons: ["Very expensive", "Character limits", "Dashboard friction"],
      link: "/klue-alternative"
    },
    {
      name: "Kompyte",
      tagline: "Real-time competitive tracking",
      price: "$40k-$80k+/year",
      setupTime: "4-6 weeks",
      depth: "Moderate depth",
      interface: "Separate dashboard",
      bestFor: "Mid to large enterprise",
      pros: ["Real-time monitoring", "Good tracking features"],
      cons: ["Expensive", "Complex setup", "Learning curve"]
    },
    {
      name: "Semrush",
      tagline: "SEO & competitive analysis",
      price: "$120-$450/month",
      setupTime: "Immediate",
      depth: "SEO-focused analysis",
      interface: "Web platform",
      bestFor: "Marketing teams, SEO focus",
      pros: ["Affordable", "Strong SEO tools", "Immediate access"],
      cons: ["Not battlecard-focused", "Limited sales enablement", "Requires manual battlecard creation"]
    },
    {
      name: "Crunchbase",
      tagline: "Company data & intelligence",
      price: "$29-$99/month (Pro)",
      setupTime: "Immediate",
      depth: "Company data only",
      interface: "Web platform",
      bestFor: "Basic company research",
      pros: ["Affordable", "Good company data", "Funding info"],
      cons: ["No battlecards", "Manual research required", "Limited competitive analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      <SEO
        title="BattleCard AI vs Crayon vs Klue vs Kompyte - Competitor Comparison 2025"
        description="Compare BattleCard AI against Crayon, Klue, Kompyte, and other competitive intelligence platforms. See pricing, features, and find the best fit for your team."
        keywords="competitive intelligence comparison, crayon vs klue, battlecard software comparison, competitive analysis tools"
        url="https://battlecard.ai/competitors"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Competitive Intelligence Platforms:{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Complete Comparison
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Compare BattleCard AI against Crayon, Klue, Kompyte, and other competitive intelligence platforms. Find the best fit for your team and budget.
            </p>
          </div>
        </div>
      </section>

      {/* BattleCard AI Highlight */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium">
                    Recommended for Startups & SMBs
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  BattleCard AI
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Enterprise-depth competitive intelligence at startup pricing. 20+ page research battlecards delivered in Slack.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">$199/month (vs $60k/year)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">20+ page deep research (vs 1-2 pages)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">2-minute setup (vs 6-8 weeks)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Slack-native (instant adoption)</span>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  onClick={() => window.open('https://calendly.com', '_blank')}
                >
                  Get Your First Battlecard Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Annual Cost</div>
                    <div className="text-3xl font-bold text-indigo-600">$2,388</div>
                    <div className="text-xs text-gray-500">Save $58k+ vs Crayon/Klue</div>
                  </div>
                  <div className="h-px bg-gray-300"></div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Research Depth</div>
                    <div className="text-2xl font-bold text-gray-900">20+ pages</div>
                    <div className="text-xs text-gray-500">vs 1-2 pages (Crayon)</div>
                  </div>
                  <div className="h-px bg-gray-300"></div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Setup Time</div>
                    <div className="text-2xl font-bold text-gray-900">2 minutes</div>
                    <div className="text-xs text-gray-500">vs 6-8 weeks (Crayon)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All Competitive Intelligence Platforms
            </h2>
            <p className="text-xl text-gray-600">
              Side-by-side comparison of features, pricing, and best use cases
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {competitors.map((comp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {comp.name}
                    </h3>
                    <p className="text-gray-600">{comp.tagline}</p>
                  </div>
                  {comp.link && (
                    <Link
                      to={comp.link}
                      className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Compare →
                    </Link>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Price</span>
                    <span className="font-semibold text-gray-900">{comp.price}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Setup Time</span>
                    <span className="font-semibold text-gray-900">{comp.setupTime}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Depth</span>
                    <span className="font-semibold text-gray-900">{comp.depth}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-600">Interface</span>
                    <span className="font-semibold text-gray-900">{comp.interface}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600">Best For</span>
                    <span className="font-semibold text-gray-900 text-right">{comp.bestFor}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      Pros
                    </h4>
                    <ul className="space-y-1">
                      {comp.pros.map((pro, i) => (
                        <li key={i} className="text-xs text-gray-600">• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-red-700 mb-2 flex items-center gap-1">
                      <X className="w-4 h-4" />
                      Cons
                    </h4>
                    <ul className="space-y-1">
                      {comp.cons.map((con, i) => (
                        <li key={i} className="text-xs text-gray-600">• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Guide */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Which Platform Is Right for You?
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-indigo-300 shadow-xl">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Choose BattleCard AI if...</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span>You're a startup or SMB (50-500 employees) with limited budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span>You need deeper research than 1-2 page summaries</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span>You want Slack-native access (no separate dashboards)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <span>You need to start getting intel today, not in 6-8 weeks</span>
                </li>
              </ul>
              <Button
                size="lg"
                className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Crayon or Klue if...</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• You're an enterprise with 500+ employees and dedicated CI budget</li>
                <li>• You need comprehensive enterprise features beyond battlecards</li>
                <li>• You have 6-8 weeks for implementation and team training</li>
                <li>• You can justify $60k-$100k annual software spend</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Semrush or Crunchbase if...</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• You primarily need SEO and marketing intelligence (Semrush)</li>
                <li>• You just need basic company data and funding info (Crunchbase)</li>
                <li>• You're willing to manually create battlecards from raw data</li>
                <li>• You don't need sales-specific competitive enablement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Try the Affordable Alternative?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Get your first competitor battlecard free. See the 20+ page depth yourself.
          </p>
          <Button
            size="lg"
            className="text-lg px-12 py-7 bg-white text-indigo-600 hover:bg-gray-50 shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            Get Your First Battlecard Free
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          <p className="mt-6 text-indigo-200">
            $199/month • No credit card required • 2-minute setup
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
