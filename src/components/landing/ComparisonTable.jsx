import React from 'react';
import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
  const features = [
    { name: "Price", crayon: "$50k-$100k/year", battlecard: "$199/month", highlight: true },
    { name: "Battlecard Depth", crayon: "Concise summaries (1-2 pages)", battlecard: "Deep research (20+ pages)", highlight: false },
    { name: "Real-Time Updates", crayon: true, battlecard: true, highlight: false },
    { name: "Slack Native", crayon: false, battlecard: true, highlight: true },
    { name: "Setup Time", crayon: "Weeks", battlecard: "Minutes", highlight: false },
    { name: "Ideal For", crayon: "Enterprise (500+)", battlecard: "Startups & SMBs (50-500)", highlight: false }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            BattleCard AI vs. Enterprise Platforms
          </h2>
          <p className="text-xl text-gray-600">
            Same depth. Real-time updates. 1/100th the price.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-slate-50">
                <th className="px-8 py-6 text-left text-lg font-bold text-gray-900">Feature</th>
                <th className="px-8 py-6 text-center text-lg font-bold text-gray-600">Crayon / Klue</th>
                <th className="px-8 py-6 text-center text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  BattleCard AI
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index} 
                  className={`border-t border-gray-200 ${feature.highlight ? 'bg-indigo-50' : ''} hover:bg-gray-50 transition-colors`}
                >
                  <td className="px-8 py-6 font-medium text-gray-900">
                    {feature.name}
                  </td>
                  <td className="px-8 py-6 text-center text-gray-600">
                    {typeof feature.crayon === 'boolean' ? (
                      feature.crayon ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                          <X className="w-5 h-5 text-red-600" />
                        </div>
                      )
                    ) : (
                      <span className={feature.highlight ? 'text-gray-500 line-through' : ''}>
                        {feature.crayon}
                      </span>
                    )}
                  </td>
                  <td className="px-8 py-6 text-center">
                    {typeof feature.battlecard === 'boolean' ? (
                      feature.battlecard ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
                          <Check className="w-5 h-5 text-white" strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                          <X className="w-5 h-5 text-red-600" />
                        </div>
                      )
                    ) : (
                      <span className={`font-semibold ${feature.highlight ? 'text-indigo-600' : 'text-gray-900'}`}>
                        {feature.battlecard}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="font-bold text-gray-900 mb-4">{feature.name}</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500 mb-2">Crayon / Klue</div>
                  <div className="text-gray-700">
                    {typeof feature.crayon === 'boolean' ? (
                      feature.crayon ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-red-600" />
                    ) : (
                      feature.crayon
                    )}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-indigo-600 font-medium mb-2">BattleCard AI</div>
                  <div className="text-gray-900 font-semibold">
                    {typeof feature.battlecard === 'boolean' ? (
                      feature.battlecard ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-red-600" />
                    ) : (
                      feature.battlecard
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}