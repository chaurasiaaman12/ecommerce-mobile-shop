// backend/src/db.js
import mongoose from 'mongoose';

export const connectDB = async (uri) => {
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, { dbName: 'mobileshop' });
  return mongoose.connection;
};
