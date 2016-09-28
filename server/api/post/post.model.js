import mongoose from 'mongoose';

const postSchema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number },
  ref_comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  _creator: { type: Number, ref: 'User'}
});

export default mongoose.model('Post', postSchema);
