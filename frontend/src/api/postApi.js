// frontend/src/api/postApi.js
// ব্যাকএন্ড REST API গুলোর সাথে যোগাযোগ করার সার্ভিস ফাইল
import axios from 'axios';

const API_URL = 'story-spark-backend-pi.vercel.app/api/posts';

// সকল পোস্ট আনার ফাংশন
export const fetchPostsAPI = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// নতুন পোস্ট তৈরি করার ফাংশন
export const createPostAPI = async (postData) => {
  try {
    const response = await axios.post(API_URL, postData);
    return response.data.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// পোস্ট আপডেট করার ফাংশন
export const updatePostAPI = async (id, postData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, postData);
    return response.data.data;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};

// পোস্ট ডিলিট করার ফাংশন
export const deletePostAPI = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};