const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  content: { type: String, required: true },
  userid: { type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model('Comment', commentSchema);
