// frontend/src/components/PostCard.jsx
// Individual Blog Post Card component
import React from 'react';
import { Eye, Edit2, Trash2, Clock } from 'lucide-react';

export default function PostCard({ post, onView, onEdit, onDelete }) {
  return (
    <div className="silk-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Cover Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-4 left-4 bg-burgundy text-gold text-xs px-3 py-1 rounded-full font-semibold">
            {post.category}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime || '5 min read'}</span>
          </div>

          <h3 className="font-serif text-xl font-bold text-burgundy mb-2 line-clamp-2 hover:text-gold transition-colors cursor-pointer" onClick={() => onView(post)}>
            {post.title}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-3 mb-6 font-light">
            {post.excerpt || post.content}
          </p>
        </div>
      </div>

      {/* Author & Actions Footer */}
      <div className="px-6 pb-6 pt-0 border-t border-silk-border/50 flex items-center justify-between mt-auto">
        {/* Author Info */}
        <div className="flex items-center space-x-3">
          <img 
            src={post.author?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'} 
            alt={post.author?.name} 
            className="w-8 h-8 rounded-full border border-gold"
          />
          <div>
            <div className="text-xs font-semibold text-gray-900">{post.author?.name || 'Sophia Bennett'}</div>
            <div className="text-[10px] text-gray-500">{post.author?.role || 'Author'}</div>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => onView(post)} 
            className="p-2 text-gray-600 hover:text-burgundy hover:bg-burgundy/10 rounded-lg transition-colors"
            title="Read Article"
          >
            <Eye className="w-4 h-4" />
          </button>

          <button 
            onClick={() => onEdit(post)} 
            className="p-2 text-gray-600 hover:text-gold hover:bg-gold/10 rounded-lg transition-colors"
            title="Edit Article"
          >
            <Edit2 className="w-4 h-4" />
          </button>

          <button 
            onClick={() => onDelete(post._id)} 
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Delete Article"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}