const mongoose = require('mongoose');

const videoSchema({
  videolink: String,
  description: String,
  ref_comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  _creator: { type: Number, ref: 'User' }
});

export default mongoose.model('Video', videoSchema);
