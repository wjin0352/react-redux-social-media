const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
  videolink: { type: String, required: true },
  description: String,
  image: String,
  title: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId }],
  userid: { type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model('Video', videoSchema)
