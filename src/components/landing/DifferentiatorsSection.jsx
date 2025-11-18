import React from 'react';
import { Database, RefreshCw, Sparkles } from 'lucide-react';

export default function DifferentiatorsSection() {
  const differentiators = [
    {
      icon: Database,
      title: "Unmatched Depth",
      description: "We max out AI token limits (40k+) to deliver battlecards with the scope and detail of $50k platforms—competitive positioning, SWOT analysis, customer pain points, tactical discovery questions, and real customer quotes.",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: RefreshCw,
      title: "Always Current",
      description: "Real-time updates powered by live web scraping and AI search. Your battlecards stay fresh with the latest pricing changes, product launches, and customer sentiment.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Zero Friction Access",
      description: "No logins. No new tools. Your team asks questions in Slack, gets answers in seconds. Adoption happens automatically.",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="demo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Not Another ChatGPT Wrapper.
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Real Competitive Intelligence.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Animated border on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Additional proof point */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl px-10 py-6 border border-indigo-100">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">40k+</div>
              <div className="text-sm text-gray-600 mt-1">Token Depth</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Real-Time</div>
              <div className="text-sm text-gray-600 mt-1">Updates</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">2 mins</div>
              <div className="text-sm text-gray-600 mt-1">Setup Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}