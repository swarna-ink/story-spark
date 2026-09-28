// backend/routes/postRoutes.js
// Express API Router - পোস্ট এন্ডপয়েন্ট হ্যান্ডলার
const express = require('express');
const router = express.Router();
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/postController');

// REST API Route 
router.route('/')
  .get(getPosts)      // সমস্ত পোস্ট ফেচ করবে
  .post(createPost);   // নতুন পোস্ট তৈরি করবে

router.route('/:id')
  .get(getPostById)   // সিঙ্গেল পোস্ট দেখাবে
  .put(updatePost)    // পোস্ট আপডেট করবে
  .delete(deletePost); // পোস্ট মুছে ফেলবে

module.exports = router;