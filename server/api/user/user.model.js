const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true }
});
userSchema.methods.validPassword = function (password) {
  if (password === this.password) {
    return true;
  }
}
module.exports = mongoose.model('User', userSchema);
