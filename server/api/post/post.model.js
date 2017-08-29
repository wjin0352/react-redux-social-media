const mongoose = require('mongoose');
const Comment = require('../comment/comment.model');
const User = require('../user/user.model');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  // comments: [{type: String }],
  // comments: [{ type: String }],
  userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Post', postSchema);
 