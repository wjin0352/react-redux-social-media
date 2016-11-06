const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  comment: { type: String, required: true },
  userid: { type: mongoose.Schema.Types.ObjectId, required: true },
  postid: { type: mongoose.Schema.Types.ObjectId, required: true }
});

module.exports = mongoose.model('Comment', commentSchema);
