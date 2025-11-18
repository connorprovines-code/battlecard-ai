import React from 'react';
import { DollarSign, Clock, FileText } from 'lucide-react';

export default function ProblemSection() {
  const painPoints = [
    {
      icon: DollarSign,
      emoji: "💰",
      title: "$50k-$100k/year",
      description: "Enterprise tools like Crayon and Klue price out growing teams",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Clock,
      emoji: "⏰",
      title: "Days of manual research",
      description: "Your sales team wastes hours Googling competitors before every deal",
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      icon: FileText,
      emoji: "📊",
      title: "Stale, scattered intel",
      description: "Battlecards live in Google Docs, outdated the moment you share them",
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Competitive Intel Shouldn't Cost More<br />Than Your Salesforce License
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${point.gradient} flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                {point.emoji}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>

              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}