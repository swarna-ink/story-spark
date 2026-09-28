// frontend/src/components/Footer.jsx
// Footer Section
import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-burgundy text-white py-12 border-t border-burgundy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-burgundy">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-gold">Story Spark</span>
        </div>

        <p className="text-xs text-gold/70">
          © {new Date().getFullYear()} Story Spark Inc. All rights reserved. Built with Node, Express, MongoDB & React.
        </p>

      </div>
    </footer>
  );
}