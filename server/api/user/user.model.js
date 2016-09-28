import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true }  },
  password: { type: String, required: true },
  email: { type: String, required: true },
  ref_posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  ref_videos: [{ type: Schema.types.ObjectId, ref: 'Video' }]
});

export default mongoose.model('User', userSchema);
