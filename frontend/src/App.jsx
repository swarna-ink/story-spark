// frontend/src/App.jsx
// Main React Application Component
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PostList from './components/PostList';
import PostFormModal from './components/PostFormModal';
import SinglePostModal from './components/SinglePostModal';
import TodoPlanner from './components/TodoPlanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { fetchPostsAPI, createPostAPI, updatePostAPI, deletePostAPI } from './api/postApi';

// Initial Mock Data (If Backend is not connected yet)
const INITIAL_POSTS = [
  {
    _id: '1',
    title: 'The Art of Minimalist Storytelling in Web Design',
    category: 'Design',
    excerpt: 'Explore how refined typography and balanced whitespace transform modern digital publishing.',
    content: 'Storytelling in web design isn’t just about the words; it’s about how those words feel on screen...',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
    readTime: '4 min read',
    author: { name: 'Sophia Bennett', role: 'Editorial Director', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200' }
  },
  {
    _id: '2',
    title: 'Structuring Scalable MongoDB Models for Fullstack Apps',
    category: 'Technology',
    excerpt: 'Best practices for defining schema relationships and referencing user documents effectively.',
    content: 'When building fullstack Express applications, properly nesting schema documents vs referencing ObjectIds is crucial...',
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000',
    readTime: '6 min read',
    author: { name: 'David Croft', role: 'Lead Developer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' }
  }
];

export default function App() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [viewingPost, setViewingPost] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Toast Notification Message
  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Load Posts from Backend API on Start
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPostsAPI();
        if (data && data.length > 0) setPosts(data);
      } catch (err) {
        console.log('Backend not connected, using client initial state.');
      }
    };
    loadPosts();
  }, []);

  // Smooth Scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Create or Update Post Handler
  const handleFormSubmit = async (formData) => {
    if (editingPost) {
      try {
        await updatePostAPI(editingPost._id, formData);
      } catch (e) {
        console.log('Local update');
      }
      setPosts(posts.map(p => p._id === editingPost._id ? { ...p, ...formData } : p));
      showNotification('Story updated successfully!');
    } else {
      const newPostObj = {
        _id: Date.now().toString(),
        ...formData,
        readTime: '5 min read',
        author: { name: 'Sophia Bennett', role: 'Editorial Director', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200' }
      };

      try {
        const created = await createPostAPI(formData);
        if (created) setPosts([created, ...posts]);
      } catch (e) {
        setPosts([newPostObj, ...posts]);
      }
      showNotification('New Story published successfully!');
    }
    setIsFormModalOpen(false);
    setEditingPost(null);
  };

  // Delete Post Handler
  const handleDeletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this story?')) {
      try {
        await deletePostAPI(id);
      } catch (e) {
        console.log('Local delete');
      }
      setPosts(posts.filter(p => p._id !== id));
      showNotification('Story deleted successfully.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-silk">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-burgundy text-gold px-6 py-3 rounded-xl shadow-2xl font-medium text-sm border border-gold flex items-center space-x-2 animate-bounce">
          <span>✨</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar 
        onOpenCreateModal={() => { setEditingPost(null); setIsFormModalOpen(true); }}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero 
        onOpenCreateModal={() => { setEditingPost(null); setIsFormModalOpen(true); }}
        scrollToSection={scrollToSection}
      />

      {/* Features Grid */}
      <Features />

      {/* Blog Catalogue */}
      <PostList 
        posts={posts} 
        onView={(post) => setViewingPost(post)}
        onEdit={(post) => { setEditingPost(post); setIsFormModalOpen(true); }}
        onDelete={handleDeletePost}
        onOpenCreateModal={() => { setEditingPost(null); setIsFormModalOpen(true); }}
      />

      {/* Todo Planner */}
      <TodoPlanner onNotify={showNotification} />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <PostFormModal 
        isOpen={isFormModalOpen}
        onClose={() => { setIsFormModalOpen(false); setEditingPost(null); }}
        onSubmit={handleFormSubmit}
        initialData={editingPost}
      />

      <SinglePostModal 
        post={viewingPost}
        onClose={() => setViewingPost(null)}
      />

    </div>
  );
}