// backend/models/User.js
// Author/User Schema (মংগোডিবি ডাটা মডেল)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'নাম দেওয়া বাধ্যতামূলক'],
  },
  email: {
    type: String,
    required: [true, 'ইমেইল দেওয়া বাধ্যতামূলক'],
    unique: true,
  },
  role: {
    type: String,
    default: 'Author',
  },
  avatar: {
    type: String,
    default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);