const Post = require('./post.model');

const PostController = function () {};

PostController.prototype.getPosts = function(req, res) {
  return new Promise (function (resolve, reject) {
    Post.find({}, function (error, posts) {
      if (error) {
        reject(error);
      } else {
        resolve(posts)
      }
    });
  }).then(function (posts) {
    res.status(200).json(posts);
  }).catch(function (error) {
    console.log(error);
  });
}

PostController.prototype.createPost = function(req, res) {
  return new Promise (function (resolve, reject) {
    Post.create({
      userid: req.user,
      title: req.body.title,
      content: req.body.content,
      likes: req.body.likes
    }, function (error, post) {
      if (error) {
        reject(error);
      } else {
        resolve(post);
      }
    });
  }).then(function (post) {
    res.status(200).json(post);
  }).catch(function (error) {
    console.log(error);
  })
};

PostController.prototype.editPost = function(req, res) {
  return new Promise (function (resolve, reject) {
    Post.update({ _id: req.params.id }, {
      title: req.body.title,
      content: req.body.content,
    }, function (error, post) {
      if (error) {
        reject(error);
      } else {
        resolve(post)
      }
    });
  }).then(function (post) {
    res.status(200).json(post);
  }).catch(function (error) {
    console.log(error);
  });
}

PostController.prototype.deletePost = function(req, res) {
  console.log(req.params.id);
  return new Promise (function (resolve, reject) {
    Post.remove({ _id: req.params.id }, function (error, post) {
      if (error) {
        reject(error);
      } else {
        resolve(post);
      }
    });
  }).then(function (post) {
    res.status(200).json(post);
  }).catch(function (error) {
    console.log(error);
  });
}

module.exports = PostController.prototype;

// arr = [{title: 'first', content: 'some content here', likes: 1}]
// const posts = function (callback) {
//   return arr;
// }
// PostController.prototype.getPosts = function(req, res) {
//   var results = posts()
//   console.log(results);
//   res.status(200).json(results);
// };

// PostController.prototype.createPost = function(req, res) {
//   var newPost = req.body;
//   arr.push(newPost);
//   res.status(200).json(arr);
// };

// PostController.prototype.editPost = function(req, res) {
//   var title = req.params.id;
//   var editedPost = req.body;
//   arr.forEach(function (post, idx) {
//     if (post.title === title) {
//       Object.assign(post, editedPost);
//       return res.status(200).json(arr);
//     }
//   })
// }

// PostController.prototype.deletePost = function(req, res) {
//   var title = req.params.id;
//   var editedPost = req.body;
//   arr.forEach(function (post, idx) {
//     if (post.title === title) {
//       arr.splice(idx, 1)
//       return res.status(200).json(arr);
//     }
//   })
// };
