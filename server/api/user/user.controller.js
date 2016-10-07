const User = require('./user.model');
var passport = require('passport');

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

// UserController.prototype.loginUser = function(req, res) {
//   // If this function gets called, authentication was successful.
//   // `req.user` contains the authenticated user.
//   // res.redirect('/users' + req.user.username);
//   // If authentication succeeds, the next handler will be invoked and the req.user property will be set to the authenticated user.
//   // res.redirect('/');
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true }),

// };

UserController.prototype.renderLoginPage = function (req, res) {
  res.redirect('/login');
};

UserController.prototype.registerUser = function (req, res) {
  console.log(req.body)
  return new Promise(function (resolve, reject) {
    User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
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

// UserController.prototype.me = function(req, res) {
//   if (req.user) {
//     res.status(200).json(req.user);
//   }
// };

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
