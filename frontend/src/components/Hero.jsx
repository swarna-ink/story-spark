// frontend/src/components/Hero.jsx
// Main Squarespace-style dynamic Hero section
import React from 'react';
import { ArrowRight, BookOpen, CheckSquare } from 'lucide-react';

export default function Hero({ onOpenCreateModal, scrollToSection }) {
  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-silk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-burgundy/5 border border-burgundy/10 text-burgundy text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span>Inspired by Editorial Design</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-burgundy leading-tight">
              A refined space for your <span className="italic font-normal text-gold">stories</span> & daily tasks.
            </h1>

            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Story Spark bridges elegant blogging with intuitive productivity. Crafted for writers, creators, and thinkers who demand perfection in every detail.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenCreateModal}
                className="w-full sm:w-auto bg-burgundy text-white px-8 py-4 rounded-full font-medium hover:bg-burgundy-dark transition-all shadow-lg flex items-center justify-center space-x-3 group"
              >
                <span>Write New Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gold" />
              </button>

              <button
                onClick={() => scrollToSection('planner')}
                className="w-full sm:w-auto border border-burgundy/20 text-burgundy px-8 py-4 rounded-full font-medium hover:bg-burgundy/5 transition-all flex items-center justify-center space-x-2"
              >
                <CheckSquare className="w-4 h-4 text-gold" />
                <span>Open Todo Planner</span>
              </button>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Editorial Journal" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-silk-border max-w-xs hidden sm:block">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-burgundy/10 rounded-xl text-burgundy">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-burgundy">100%</div>
                    <div className="text-xs text-gray-500">Responsive & Interactive</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}