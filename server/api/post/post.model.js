const mongoose = require('mongoose');

const postSchema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number },
  userid: { type: mongoose.Schema.Types.ObjectId },
});

export default mongoose.model('Post', postSchema);
