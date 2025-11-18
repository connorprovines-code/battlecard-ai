import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function RelatedArticles({ currentSlug }) {
  const allPosts = [
    {
      title: "Why I Built BattleCard AI",
      description: "The founder story behind building a $199/month alternative to $60k enterprise platforms.",
      slug: "/blog/why-i-built-battlecard-ai",
      readTime: "5 min",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "How to Build Battlecards Without Paying $60k",
      description: "Complete DIY guide to creating competitive battlecards without enterprise software.",
      slug: "/blog/how-to-build-battlecards",
      readTime: "12 min",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Klue Pricing: What They Don't Tell You",
      description: "Real pricing breakdown: per-user costs, hidden fees, and the enterprise tax.",
      slug: "/blog/klue-pricing",
      readTime: "10 min",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  // Filter out current article and show 2 related posts
  const relatedPosts = allPosts.filter(post => post.slug !== currentSlug).slice(0, 2);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {relatedPosts.map((post, index) => (
            <Link
              key={index}
              to={post.slug}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${post.gradient} mb-3`}>
                {post.readTime} read
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.description}
              </p>
              <div className="flex items-center gap-2 text-indigo-600 font-medium group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
