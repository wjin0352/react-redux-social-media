const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const Post = require('../post/post.model');
const Comment = require('../comment/comment.model');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});
userSchema.methods.validatePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function(err, isValid) {
    if (err) {
      callback(err);
      return;
    }
    callback(null, isValid)
  })
}
module.exports = mongoose.model('User', userSchema);
