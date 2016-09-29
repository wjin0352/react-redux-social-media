const User = require('./user.model');

const UserController = function () {};

  // username: { type: String, required: true, index: { unique: true }  },
  // password: { type: String, required: true },
  // email: { type: String, required: true },
  // ref_posts: { type: Array }

UserController.prototype.getUsers = (req, res) => {
  return new Promise (function (resolve, reject) {
    User.find({}, function(error, users) {
      if (error) {
        reject(error);
      } else {
        resolve(users);
      }
    });
  }).then(function (users) {
    res.status(200).json(users);
  }).catch(function (error) {
    console.log(error);
  });
}

UserController.prototype.createUser = function (req, res) {
  return new Promise(function (resolve, reject) {
    User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }, function(error, user) {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  }).then(function (user) {
    res.status(200).json(user);
    mongoose.disconnect();
  }).catch(function (error) {
    console.log(error);
    mongoose.disconnect();
  });
}

UserController.prototype.editUser = (req, res) => {
  return new Promise(function (resolve, reject) {
    User.update( { id: req.params.id },
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }, function (error, user) {
        if (error) {
          reject(error);
        } else {
          resolve(user);
        }
      });
  }).then(function (user) {
    res.status(200).json(user);
  }).catch(function (error) {
    console.log(error);
  });
}

UserController.prototype.deleteUser = (req, res) => {
  return new Promise(function (resolve, reject) {
    User.remove( { id: req.params.id}, function (error, user) {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  }).then((user) => {
    res.status(200).json(user);
  }).catch((error) => {
    console.log(error);
  });
}

module.exports = UserController.prototype;
