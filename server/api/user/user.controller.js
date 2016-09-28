import User from './user.model';

const UserController = () => {}

  // username: { type: String, required: true, index: { unique: true }  },
  // password: { type: String, required: true },
  // email: { type: String, required: true },
  // ref_posts: { type: Array }

UserController.prototype.getUsers = (req, res) => {
  return new Promise (function(resolve, reject) {
    User.find({}, function(error, users) {
      if (error) {
        reject(error);
      } else {
        resolve(users);
      }
    });
  }).then(function(users) {
    res.status(200).json(users);
  }).catch(function(error) {
    console.log(error);
  });
}

UserController.prototype.createUser = (req, res) => {
  return new Promise(function(resolve, reject) {
    User.create({
      username: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      ref_posts: req.body.posts
    }, function(error, user) {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  }).then(function(user) {
    res.status(200).json(user);
  }).catch(function(error) {
    console.log(error);
  });
}

UserController.prototype.editUser = (req, res) => {

}

UserController.prototype.deleteUser = (req, res) => {

}

export default UserController.prototype;
