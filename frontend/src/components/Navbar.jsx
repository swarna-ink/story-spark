// frontend/src/components/Navbar.jsx
// Squarespace inspired Navbar component
import React from 'react';
import { Sparkles, PlusCircle, CheckSquare } from 'lucide-react';

export default function Navbar({ onOpenCreateModal, scrollToSection }) {
  return (
    <header className="sticky top-0 z-40 bg-silk/90 backdrop-blur-md border-b border-silk-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-10 h-10 rounded-full bg-burgundy flex items-center justify-center text-gold shadow-md">
            <Sparkles className="w-5 h-5 fill-gold" />
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-burgundy block leading-none">
              Story Spark
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
              Publishing & Planner
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <button onClick={() => scrollToSection('features')} className="hover:text-burgundy transition-colors">
            Features
          </button>
          <button onClick={() => scrollToSection('blog')} className="hover:text-burgundy transition-colors">
            Blog Journal
          </button>
          <button onClick={() => scrollToSection('planner')} className="hover:text-burgundy transition-colors">
            Todo Planner
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-burgundy transition-colors">
            Stories
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onOpenCreateModal}
            className="flex items-center space-x-2 bg-burgundy text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-burgundy-dark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <PlusCircle className="w-4 h-4 text-gold" />
            <span>Create Story</span>
          </button>
        </div>

      </div>
    </header>
  );
}