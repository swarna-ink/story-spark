// backend/server.js
// এক্সপ্রেস ব্যাকএন্ড সার্ভার এন্ট্রি পয়েন্ট
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const postRoutes = require('./routes/postRoutes');

// Environment variables লোড করা
dotenv.config();

// ডাটাবেজ কানেক্ট করা
connectDB();

const app = express();

// Middleware সেটিং
app.use(cors()); // Cross-Origin Resource Sharing
app.use(express.json()); // JSON Body Parser

// API Routes
app.use('/api/posts', postRoutes);

// টেস্ট রুট
app.get('/', (req, res) => {
  res.send('Story Spark API is running...');
});

// পোর্ট সেটিং এবং সার্ভার চালু
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in mode on port ${PORT}`);
});