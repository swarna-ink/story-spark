// frontend/src/components/SinglePostModal.jsx
// Single Post View Modal
import React from 'react';
import { X, Clock, Calendar } from 'lucide-react';

export default function SinglePostModal({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-silk-border relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-gray-700 hover:text-burgundy transition-colors shadow-md z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover Image */}
        <div className="h-64 sm:h-80 w-full overflow-hidden relative">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="bg-gold text-burgundy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-bold mt-2 text-white">{post.title}</h1>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-10 space-y-6">
          {/* Author Header */}
          <div className="flex items-center justify-between pb-6 border-b border-silk-border">
            <div className="flex items-center space-x-4">
              <img 
                src={post.author?.avatar} 
                alt={post.author?.name} 
                className="w-12 h-12 rounded-full border-2 border-gold"
              />
              <div>
                <p className="font-bold text-burgundy">{post.author?.name}</p>
                <p className="text-xs text-gray-500">{post.author?.role}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime || '5 min read'}</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="prose max-w-none text-gray-700 leading-relaxed font-light space-y-4">
            <p className="text-lg font-serif italic text-burgundy/80">{post.excerpt}</p>
            <p>{post.content}</p>
          </div>
        </div>

      </div>
    </div>
  );
}