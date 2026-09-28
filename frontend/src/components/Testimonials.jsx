// frontend/src/components/Testimonials.jsx
// Squarespace Testimonials Section
import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Eleanor Vance",
      role: "Editor-in-Chief, Silk Magazine",
      quote: "Story Spark completely reshaped our editorial workflow. The minimal design keeps us focused on high quality writing."
    },
    {
      name: "Marcus Thorne",
      role: "Creative Director",
      quote: "The interface aesthetics combined with fast dynamic API responses make this my go-to template for client projects."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-silk border-t border-silk-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Community Voices</h2>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy">Loved by Modern Publishers</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((rev, i) => (
            <div key={i} className="silk-card p-8 rounded-2xl space-y-4">
              <div className="flex space-x-1 text-gold">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-gold" />
                ))}
              </div>
              <p className="font-serif italic text-gray-700 leading-relaxed text-lg">"{rev.quote}"</p>
              <div>
                <p className="font-bold text-burgundy text-sm">{rev.name}</p>
                <p className="text-xs text-gray-500">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}