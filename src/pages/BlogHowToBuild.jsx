import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/landing/Footer';
import SEO from '../components/SEO';

export default function BlogHowToBuild() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <SEO
        title="How to Build Competitive Battlecards Without Paying $60k/Year"
        description="Step-by-step guide to creating effective competitive battlecards without enterprise software. Learn the DIY approach that works for startups and SMBs."
        keywords="how to build battlecards, competitive battlecards guide, battlecard template, competitive intelligence DIY"
        url="https://battlecard.ai/blog/how-to-build-battlecards"
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                Practical Guide
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              How to Build Competitive Battlecards Without Paying $60k/Year
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span>12 min read</span>
              <span>•</span>
              <span>January 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              You don't need to spend $60,000/year on Crayon or Klue to arm your sales team with competitive intelligence. Here's how to build effective battlecards yourself—and when it makes sense to automate the process.
            </p>

            {/* Section 1 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Step 1: Choose Your Battlecard Structure</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Before you start researching, decide on a consistent structure. Here's a proven framework used by successful teams:
            </p>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Battlecard Sections</h3>
              <ul className="space-y-3 text-gray-700">
                <li><span className="font-semibold">Executive Summary:</span> 2-3 sentence overview of the competitor</li>
                <li><span className="font-semibold">Positioning & Messaging:</span> How they position themselves vs how you should position against them</li>
                <li><span className="font-semibold">SWOT Analysis:</span> Their strengths, weaknesses, opportunities, threats</li>
                <li><span className="font-semibold">Pricing Intel:</span> Actual pricing data (not just what's on their website)</li>
                <li><span className="font-semibold">Customer Pain Points:</span> What their customers complain about</li>
                <li><span className="font-semibold">Discovery Questions:</span> Tactical questions to ask prospects</li>
                <li><span className="font-semibold">Objection Handling:</span> How to respond when prospects prefer them</li>
                <li><span className="font-semibold">Win Stories:</span> Real examples of deals you've won against them</li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold">Pro tip:</span> Keep battlecards to 2-3 pages max if your team will read them manually. If you're using AI to synthesize answers (more on this later), you can go deeper with 20+ pages of research.
            </p>

            {/* Section 2 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Step 2: Gather Competitive Intelligence</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is the time-consuming part. Here's where to find high-quality competitive intel:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary Sources (Most Valuable)</h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li><span className="font-semibold">Win-loss interviews:</span> Talk to prospects who chose competitors. Ask why.</li>
              <li><span className="font-semibold">Sales call recordings:</span> Review calls where competitors came up. What objections did they raise?</li>
              <li><span className="font-semibold">Customer reviews:</span> Mine G2, Capterra, TrustRadius for real customer complaints</li>
              <li><span className="font-semibold">Your own sales team:</span> They hear competitive intel daily. Document it.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Secondary Sources (Good for Baseline)</h3>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li><span className="font-semibold">Competitor websites:</span> Product pages, pricing, positioning</li>
              <li><span className="font-semibold">LinkedIn:</span> Employee count, recent hires, job postings (signals their priorities)</li>
              <li><span className="font-semibold">Press releases:</span> Product launches, funding announcements</li>
              <li><span className="font-semibold">Demo their product:</span> Use a burner email, go through their sales process</li>
              <li><span className="font-semibold">Industry analyst reports:</span> Gartner, Forrester (if you have access)</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
              <p className="text-gray-800 font-semibold mb-2">⏱️ Time Investment</p>
              <p className="text-gray-700">
                Expect to spend <span className="font-semibold">8-12 hours of research per competitor</span> to build a comprehensive battlecard. For 5 competitors, that's 40-60 hours of work.
              </p>
            </div>

            {/* Section 3 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Step 3: Mine Customer Reviews for Gold</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is where most teams get lazy—but it's where the best competitive intel lives. Here's how to do it right:
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Review Mining Process</h4>
              <ol className="space-y-4 text-gray-700">
                <li><span className="font-semibold">1. Collect all 1-3 star reviews</span> from G2, Capterra, TrustRadius (these contain pain points)</li>
                <li><span className="font-semibold">2. Categorize complaints</span> by theme (pricing, features, support, implementation, etc.)</li>
                <li><span className="font-semibold">3. Extract specific quotes</span> you can use in sales conversations</li>
                <li><span className="font-semibold">4. Identify patterns</span> that appear in 3+ reviews (these are systematic issues)</li>
                <li><span className="font-semibold">5. Cross-reference with your strengths</span> to find attack angles</li>
              </ol>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold">Example:</span> If 10+ reviews mention "HubSpot is too expensive once you add Marketing and Sales hubs," your discovery question becomes: <span className="italic">"Are you paying for features you don't use with your current CRM?"</span>
            </p>

            {/* Section 4 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Step 4: Build Your Battlecards (Tool Options)</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Now that you have the intel, you need to organize it. Here are your options:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Option 1: Google Docs/Notion (Free, Manual)</h3>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Pros:</span> Free, easy to share, everyone knows how to use it
              <br />
              <span className="font-semibold">Cons:</span> No automatic updates, hard to keep current, no Slack integration
              <br />
              <span className="font-semibold">Best for:</span> Teams under 20 people with 1-2 main competitors
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Option 2: Spreadsheets (Free, Structured)</h3>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Pros:</span> Free, structured data, easy to filter/sort
              <br />
              <span className="font-semibold">Cons:</span> Not sales-friendly, no real-time Q&A, requires manual updates
              <br />
              <span className="font-semibold">Best for:</span> Product/marketing teams doing analysis (not sales enablement)
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Option 3: Confluence/SharePoint (If You Already Have It)</h3>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Pros:</span> Already in your tech stack, access controls, version history
              <br />
              <span className="font-semibold">Cons:</span> Sales reps won't actually check it, no Slack integration
              <br />
              <span className="font-semibold">Best for:</span> Documenting intel (not enabling sales teams)
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Option 4: Automate with AI ($199/mo)</h3>
            <p className="text-gray-700 mb-6">
              <span className="font-semibold">Pros:</span> Automatic research, real-time updates, Slack-native, 20+ page depth
              <br />
              <span className="font-semibold">Cons:</span> Costs money (but 1/100th of Crayon/Klue)
              <br />
              <span className="font-semibold">Best for:</span> Teams that want depth without manual work
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-8">
              <p className="text-gray-800 font-semibold mb-2">💡 Reality Check</p>
              <p className="text-gray-700">
                If you value your time at $50/hour and spend 10 hours/month updating battlecards, you're spending $500/month in labor. At that point, <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium underline">automating for $199/month</Link> makes financial sense.
              </p>
            </div>

            {/* Section 5 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Step 5: Keep Battlecards Current (The Hard Part)</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is where DIY battlecards fail. Competitors change pricing, launch products, and pivot positioning. Your battlecards get stale.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Manual Maintenance Schedule</h3>
            <ul className="space-y-3 text-gray-700 mb-8">
                <li><span className="font-semibold">Weekly:</span> Check competitor blogs, press releases, product updates</li>
              <li><span className="font-semibold">Monthly:</span> Review new customer reviews on G2, Capterra</li>
              <li><span className="font-semibold">Quarterly:</span> Full battlecard refresh with sales team input</li>
              <li><span className="font-semibold">After every lost deal:</span> Update with new competitive intel</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="font-semibold">Assign an owner:</span> Someone on product marketing needs to own competitive intelligence. Without ownership, battlecards go stale in 3-6 months.
            </p>

            {/* Section 6 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Step 6: Make Battlecards Accessible (Critical)</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The best battlecard is useless if your sales team can't find it. Here's the adoption hierarchy:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <p className="text-red-800 font-semibold mb-2">❌ Worst: Separate Dashboard</p>
                <p className="text-gray-700">Adoption rate: 10-20%. Sales reps won't log into another tool.</p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-yellow-800 font-semibold mb-2">⚠️ Medium: Google Drive/Notion</p>
                <p className="text-gray-700">Adoption rate: 30-40%. They'll check it if you nag them.</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-green-800 font-semibold mb-2">✅ Best: Slack Integration</p>
                <p className="text-gray-700">Adoption rate: 80-90%. They ask questions where they already work.</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              If you go the DIY route, set up a Slack channel (#competitive-intel) and paste battlecard links whenever competitors come up in conversation.
            </p>

            {/* Section 7 */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">When DIY Makes Sense vs When to Automate</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">DIY Approach Works If:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ You have 1-2 main competitors</li>
                  <li>✓ Your team is under 20 people</li>
                  <li>✓ Competitors rarely change</li>
                  <li>✓ Someone can dedicate 10+ hours/month</li>
                  <li>✓ Budget is truly $0</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">Automate If:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ You have 3+ competitors</li>
                  <li>✓ Your team is 20+ people</li>
                  <li>✓ Competitors change frequently</li>
                  <li>✓ Your time is worth more than $50/hr</li>
                  <li>✓ You need deeper research (20+ pages)</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Skip the Manual Work
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                BattleCard AI does everything in this guide automatically—20+ page research, real-time updates, full review mining, and Slack-native access. For $199/month instead of $60k/year.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 mb-4"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                Get Your First Battlecard Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-sm text-gray-600">
                No credit card required • 2-minute setup • Cancel anytime
              </p>
            </div>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Bottom Line</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You <span className="font-semibold">can</span> build competitive battlecards without enterprise software. It requires discipline, a structured process, and 10-15 hours of work per competitor.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The real question isn't whether you <span className="italic">can</span> do it yourself—it's whether your time is better spent on strategic work or manual competitive research.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              If you're ready to automate, <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-semibold underline">try BattleCard AI free</Link>. If you want to DIY it, this guide gives you the exact process we automated.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
