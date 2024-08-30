// lib/mongodb.ts
import mongoose from 'mongoose';

const database = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected to MongoDB');
    return; // Nếu đã kết nối rồi thì không làm gì cả
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

export default database;
