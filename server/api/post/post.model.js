const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number },
  userid: { type: mongoose.Schema.Types.ObjectId },
});

module.exports = mongoose.model('Post', postSchema);
