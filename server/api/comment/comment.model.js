const mongoose = require('mongoose');
const User = require('../user/user.model');

const commentSchema = mongoose.Schema({
  comment: { type: String, required: true },
  user_email: { type: String },
  username: { type: String },
  userid: { type: mongoose.Schema.Types.ObjectId,  required: true },
  postid: { type: mongoose.Schema.Types.ObjectId,  required: true }
});

module.exports = mongoose.model('Comment', commentSchema);
