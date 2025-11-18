import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';
import Footer from '../components/landing/Footer';
import SEO from '../components/SEO';

export default function BlogIndex() {
  const posts = [
    {
      title: "Why I Built BattleCard AI: A Better Alternative to Crayon & Klue",
      description: "The founder story behind BattleCard AI. Why $60k/year for competitive intelligence doesn't work for startups, and how we built a better alternative.",
      slug: "/blog/why-i-built-battlecard-ai",
      readTime: "5 min read",
      date: "January 2025",
      category: "Founder Story",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "How to Build Competitive Battlecards Without Paying $60k/Year",
      description: "Step-by-step guide to creating effective competitive battlecards without enterprise software. Learn the DIY approach that works for startups and SMBs.",
      slug: "/blog/how-to-build-battlecards",
      readTime: "12 min read",
      date: "January 2025",
      category: "Guide",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Klue Pricing in 2025: What They Don't Tell You About the Real Cost",
      description: "The truth about Klue pricing: per-user costs, hidden fees, 7-8 week setup, and why SMBs pay the enterprise tax. Real pricing insights from customer data.",
      slug: "/blog/klue-pricing",
      readTime: "10 min read",
      date: "January 2025",
      category: "Analysis",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      <SEO
        title="BattleCard AI Blog - Competitive Intelligence Insights & Guides"
        description="Learn about competitive intelligence, battlecard strategies, and alternatives to expensive enterprise platforms like Crayon and Klue."
        keywords="competitive intelligence blog, battlecard guide, crayon alternative blog, klue pricing analysis"
        url="https://battlecard.ai/blog"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Competitive Intelligence{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Insights & Guides
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn how to build effective battlecards, understand competitive intelligence pricing, and discover alternatives to expensive enterprise platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link
                key={index}
                to={post.slug}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="p-6 pb-0">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${post.gradient}`}>
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-indigo-600 font-medium group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Ready to Try It?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Deeper Competitive Intelligence at 1/100th the Cost
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Stop reading about competitive intelligence. Start getting it. First battlecard is free.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Your First Battlecard Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
