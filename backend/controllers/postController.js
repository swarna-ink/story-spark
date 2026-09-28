// backend/controllers/postController.js
// পোস্ট সম্পর্কিত সমস্ত API লজিক (CRUD operations)
const Post = require('../models/Post');

// ১. সমস্ত পোস্ট একসাথে পাওয়া (GET /api/posts)
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ২. একটি নির্দিষ্ট পোস্ট পাওয়া (GET /api/posts/:id)
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, message: 'পোস্টটি পাওয়া যায়নি' });
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ৩. নতুন পোস্ট তৈরি করা (POST /api/posts)
const createPost = async (req, res) => {
  try {
    const { title, content, excerpt, category, coverImage, author } = req.body;

    const newPost = await Post.create({
      title,
      content,
      excerpt: excerpt || content.substring(0, 100) + '...',
      category,
      coverImage: coverImage || 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1000',
      author: author || {
        name: 'Sophia Bennett',
        role: 'Editorial Director',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
      }
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ৪. পোস্ট আপডেট করা (PUT /api/posts/:id)
const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ success: false, message: 'পোস্ট পাওয়া যায়নি' });
    }
    res.status(200).json({ success: true, data: updatedPost });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// ৫. পোস্ট মুছে ফেলা (DELETE /api/posts/:id)
const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ success: false, message: 'পোস্টটি পাওয়া যায়নি' });
    }
    res.status(200).json({ success: true, message: 'পোস্টটি সফলভাবে ডিলেট করা হয়েছে' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};