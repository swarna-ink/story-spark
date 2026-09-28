// frontend/src/components/PostFormModal.jsx
// Modal for Creating / Editing Articles
import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

export default function PostFormModal({ isOpen, onClose, onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Storytelling',
    excerpt: '',
    content: '',
    coverImage: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        title: '',
        category: 'Storytelling',
        excerpt: '',
        content: '',
        coverImage: ''
      });
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative border border-silk-border">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-burgundy transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="font-serif text-2xl font-bold text-burgundy mb-6">
          {initialData ? 'Edit Story' : 'Create New Story'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Story Title</label>
            <input 
              type="text" 
              required 
              value={formData.title} 
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter title..."
              className="w-full px-4 py-3 rounded-lg border border-silk-border focus:ring-2 focus:ring-burgundy outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Category</label>
              <select 
                value={formData.category} 
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-silk-border focus:ring-2 focus:ring-burgundy outline-none bg-white"
              >
                <option value="Storytelling">Storytelling</option>
                <option value="Design">Design</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Cover Image URL</label>
              <input 
                type="url" 
                value={formData.coverImage} 
                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                placeholder="https://images.unsplash.com/..."
                className="w-full px-4 py-3 rounded-lg border border-silk-border focus:ring-2 focus:ring-burgundy outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Short Excerpt</label>
            <input 
              type="text" 
              value={formData.excerpt} 
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Brief summary of the article..."
              className="w-full px-4 py-3 rounded-lg border border-silk-border focus:ring-2 focus:ring-burgundy outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Story Content</label>
            <textarea 
              rows={5} 
              required 
              value={formData.content} 
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Write your story details here..."
              className="w-full px-4 py-3 rounded-lg border border-silk-border focus:ring-2 focus:ring-burgundy outline-none resize-none"
            />
          </div>

          <div className="pt-4 flex justify-end space-x-3">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-6 py-2.5 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 text-sm font-semibold"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-6 py-2.5 rounded-full bg-burgundy text-white hover:bg-burgundy-dark text-sm font-semibold flex items-center space-x-2"
            >
              <Send className="w-4 h-4 text-gold" />
              <span>{initialData ? 'Update Story' : 'Publish Story'}</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}