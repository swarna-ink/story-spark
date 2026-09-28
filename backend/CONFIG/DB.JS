// 
// Configuration file for connecting to the MongoDB database
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connecting using the MongoDB connection string.
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1); // It will stop the process if there is an error.
  }
};

module.exports = connectDB;