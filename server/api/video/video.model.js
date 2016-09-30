const mongoose = require('mongoose');

const videoSchema({
  videolink: String,
  description: String,
  comments: [{ type: Schema.Types.ObjectId }],
  userid: { type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model('Video', videoSchema)
