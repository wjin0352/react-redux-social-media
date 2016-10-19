const User = require('./user.model');
var passport = require('passport');
var bcrypt = require('bcryptjs');

const UserController = function () {};

UserController.prototype.getUsers = function (req, res) {
  return new Promise (function (resolve, reject) {
    User.find({}, function (error, users) {
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


// UserController.prototype.renderLoginPage = function (req, res) {
//   res.redirect('/login');
// };

UserController.prototype.registerUser = function (req, res) {
  return new Promise(function (resolve, reject) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        reject(err);
      }
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        if (err) {
          reject(err);
        }
          User.create({
          username: req.body.username,
          password: hash,
          email: req.body.email
        }, function (error, user) {
          if (error) {
            reject(error);
          } else {
            resolve(user);
          }
        });
      });
    });
  })
  .then(function (user) {
    res.status(200).json(user);
  })
  .catch(function (error) {
    console.log(error);
  });
};



// UserController.prototype.registerUser = function (req, res) {
//   console.log(req.body)
//   return new Promise(function (resolve, reject) {
//     User.create({
//       username: req.body.username,
//       password: req.body.password,
//       email: req.body.email
//     }, function (error, user) {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(user);
//       }
//     });
//   }).then(function (user) {
//     res.status(200).json(user);
//   }).catch(function (error) {
//     console.log(error);
//   });
// }

UserController.prototype.logout = function(req, res){
  req.logout();
  res.redirect('/');
}

UserController.prototype.editUser = function (req, res) {
  return new Promise(function (resolve, reject) {
    User.update( { _id: req.params.id },
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

UserController.prototype.deleteUser = function (req, res) {
  return new Promise(function (resolve, reject) {
    User.remove( { _id: req.params.id}, function (error, user) {
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

module.exports = UserController.prototype;
