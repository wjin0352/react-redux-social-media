import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true }  },
  password: { type: String, required: true },
  email: { type: String, required: true },
  ref_posts: { type: Array }
});

export default mongoose.model('User', userSchema);
