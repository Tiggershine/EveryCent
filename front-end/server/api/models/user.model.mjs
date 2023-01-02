import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// User Schema
export const userSchema = new Schema(
  {
    userId: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  }
);

const User = mongoose.model('User', userSchema); 
export default User;
