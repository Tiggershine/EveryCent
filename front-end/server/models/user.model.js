import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create User Schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', userSchema, 'users'); 
export default User;
