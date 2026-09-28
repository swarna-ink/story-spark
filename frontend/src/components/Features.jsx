// frontend/src/components/Features.jsx
// Squarespace-style Feature Grid
import React from 'react';
import { Edit3, Layers, Database, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Edit3 className="w-6 h-6 text-gold" />,
      title: "Rich Blog Management",
      desc: "Full CRUD capabilities to create, edit, view, and organize your written articles seamlessly."
    },
    {
      icon: <Layers className="w-6 h-6 text-gold" />,
      title: "Interactive Todo Planner",
      desc: "Plan your writing timeline with dynamic category tags, priority flags, and status toggles."
    },
    {
      icon: <Database className="w-6 h-6 text-gold" />,
      title: "MongoDB & REST Architecture",
      desc: "Designed using MongoDB data relationships, schema validation, and REST API controllers."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: "Burgundy Silk Aesthetics",
      desc: "Styled in polished Burgundy (#7A1C2B), Gold (#D4AF37) accents, and smooth responsive layouts."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white border-y border-silk-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Designed for Creators</h2>
          <p className="font-serif text-3xl sm:text-4xl font-bold text-burgundy">Everything you need to publish with impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-silk border border-silk-border hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-xl bg-burgundy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-burgundy mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}