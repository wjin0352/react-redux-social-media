import mongoose from 'mongoose';

const commentSchema({
  content: { type: String, required: true },
  creatorid: { type: mongoose.Schema.Types.ObjectId }
});

export default mongoose.model('Comment', commentSchema);
