const User = require('./user.model');

const UserController = function () {};

// UserController.prototype.getUsers = function (req, res) {
//   return new Promise (function (resolve, reject) {
//     User.find({}, function(error, users) {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(users);
//       }
//     });
//   }).then(function (users) {
//     res.status(200).json(users);
//   }).catch(function (error) {
//     console.log(error);
//   });
// }

var arr = [{username: "user1", password: "spagetti", email: "haha"}];

const sendUsers = function (callback) {
  return arr;
};

UserController.prototype.getUsers = function (req, res) {
  var results = sendUsers();
  res.status(200).json(results);
  // return new Promise (function (resolve, reject) {
  //   sendUsers(function(error, users) {
  //     if (error) {
  //       reject(error);
  //     } else {
  //       resolve(users)
  //     }
  //   })
  // }).then(function (users) {
  //   res.status(200).json(users);
  // }).catch(function (error) {
  //   console.log(error);
  // })
}

// UserController.prototype.createUser = function (req, res) {
//   return new Promise(function (resolve, reject) {
//     User.create({
//       username: req.body.username,
//       password: req.body.password,
//       email: req.body.email
//     }, function(error, user) {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(user);
//       }
//     });
//   }).then(function (user) {
//     res.status(200).json(user);
//     mongoose.disconnect();
//   }).catch(function (error) {
//     console.log(error);
//     mongoose.disconnect();
//   });
// }

UserController.prototype.createUser = function(req, res) {
  console.log(req.body);
  arr.push(req.body);
  res.status(200).json(arr);
};

// UserController.prototype.editUser = function (req, res) {
//   return new Promise(function (resolve, reject) {
//     User.update( { _id: req.params.id },
//       {
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//       }, function (error, user) {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(user);
//         }
//       });
//   }).then(function (user) {
//     res.status(200).json(user);
//   }).catch(function (error) {
//     console.log(error);
//   });
// }

UserController.prototype.editUser = function(req, res) {
  console.log(req.params)
  console.log(req.body)
  var id = req.params.id;
  arr.forEach(function(obj, idx){
    if (arr[idx].username === id ) {
      // obj.forEach(function(i, attribute) {
      //   if (obj[i] != attribute) {
      //     obj[i] = attribute
      //   }
      // })
      Object.assign(obj, req.body)
    }
    return res.status(200).json(arr);
  })
}

// UserController.prototype.deleteUser = function (req, res) {
//   return new Promise(function (resolve, reject) {
//     User.remove( { _id: req.params.id}, function (error, user) {
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

UserController.prototype.deleteUser = function (req, res) {
  var id = req.params.id;
  arr.forEach(function(obj, idx) {
    if (arr[idx].username === id) {
      arr.splice(idx, 1);
    }
  })
  res.status(200).json(arr);
}

module.exports = UserController.prototype;
