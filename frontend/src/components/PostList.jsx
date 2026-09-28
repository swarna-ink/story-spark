// frontend/src/components/PostList.jsx
// Catalogue of Blog Posts
import React from 'react';
import PostCard from './PostCard';

export default function PostList({ posts, onView, onEdit, onDelete, onOpenCreateModal }) {
  return (
    <section id="blog" className="py-20 bg-silk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gold mb-2">Editorial Collection</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy">Latest Published Stories</h3>
          </div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Showing {posts.length} articles
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-silk-border p-8">
            <p className="text-gray-500 font-serif text-lg mb-4">No stories published yet.</p>
            <button 
              onClick={onOpenCreateModal}
              className="bg-burgundy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-burgundy-dark transition-colors"
            >
              Write First Story
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard 
                key={post._id} 
                post={post} 
                onView={onView} 
                onEdit={onEdit} 
                onDelete={onDelete} 
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}