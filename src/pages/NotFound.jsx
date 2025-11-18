import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '../components/landing/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* 404 Content */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* 404 Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 mb-8">
            <FileQuestion className="w-12 h-12 text-indigo-600" />
          </div>

          {/* 404 Text */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Looks like this competitive intelligence lead went cold. Let's get you back on track.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                <Home className="mr-2 w-5 h-5" />
                Go to Homepage
              </Button>
            </Link>
            <Link to="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-2"
              >
                Read Blog
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Pages</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <Link
                to="/crayon-alternative"
                className="p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
              >
                <div className="font-semibold text-gray-900 mb-1">Crayon Alternative</div>
                <div className="text-sm text-gray-600">Save $58k+/year</div>
              </Link>
              <Link
                to="/klue-alternative"
                className="p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
              >
                <div className="font-semibold text-gray-900 mb-1">Klue Alternative</div>
                <div className="text-sm text-gray-600">96% cost savings</div>
              </Link>
              <Link
                to="/competitors"
                className="p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
              >
                <div className="font-semibold text-gray-900 mb-1">Competitors</div>
                <div className="text-sm text-gray-600">Compare all platforms</div>
              </Link>
              <Link
                to="/blog/how-to-build-battlecards"
                className="p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
              >
                <div className="font-semibold text-gray-900 mb-1">How to Build Battlecards</div>
                <div className="text-sm text-gray-600">DIY guide</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
