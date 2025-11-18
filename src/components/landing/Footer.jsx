import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Name */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">BC</span>
              </div>
              <span className="text-white text-xl font-bold">BattleCard AI</span>
            </div>
            <p className="text-sm">
              Enterprise competitive intelligence at startup pricing.
            </p>
          </div>

          {/* Pricing */}
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">$199/month</div>
            <p className="text-sm">Transparent pricing. No enterprise tax.</p>
          </div>

          {/* Contact */}
          <div className="text-right">
            <a 
              href="mailto:hello@battlecard.ai" 
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4"
            >
              <Mail className="w-4 h-4" />
              hello@battlecard.ai
            </a>
            <div className="space-x-4 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© 2024 BattleCard AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}