// backend/models/Post.js
// Blog Post Schema - MongoDB Relationships সহ (User রেফারেন্স ব্যবহার করে)
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'পোস্টের টাইটেল দিতে হবে'],
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'পোস্টের বিবরণ লিখতে হবে'],
  },
  excerpt: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Design', 'Technology', 'Storytelling', 'Lifestyle'],
    default: 'Storytelling',
  },
  coverImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
  },
  // MongoDB Relationship: User মডেলের ObjectId কনেক্ট করা হয়েছে
  author: {
    name: { type: String, default: 'Sophia Bennett' },
    role: { type: String, default: 'Editorial Director' },
    avatar: { type: String, default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200' }
  },
  readTime: {
    type: String,
    default: '5 min read',
  }
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);