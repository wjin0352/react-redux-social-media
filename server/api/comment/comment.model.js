import mongoose from 'mongoose';

const commentSchema({
  content: { type: String, required: true },
  ref_comments: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  _creator: { type: Number, ref: 'User' }
});

export default mongoose.model('Comment', commentSchema);
