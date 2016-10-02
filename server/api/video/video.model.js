const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
  videolink: String,
  description: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId }],
  userid: { type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model('Video', videoSchema)
