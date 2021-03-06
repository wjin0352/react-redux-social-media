const Comment = require('./comment.model');
const Post = require('../post/post.model');
const Schema = require('mongoose').Schema;
const CommentController = function () {};

CommentController.prototype.getPostComments = function(req, res) {
  return new Promise (function (resolve, reject) {
    // console.log('postid: ',req.params.post_id)
    Comment.find({"postid": req.params.post_id}, function (error, comments) {
      // console.log('comments: ', comments)
      if (error) {
        reject(error);
      } else {
        resolve(comments);
      }
    });
  }).then(function(comments) {
    res.status(200).json(comments)
  }).catch(function(error) {
    console.log(error);
  });
}

// CommentController.prototype.getPostComments = function(req, res) {
//   return new Promise (function (resolve, reject) {
//     Comment.find()
//     .populate('postid')
//     .exec ( function (error, comments) {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(comments);
//       }
//     })
//   }).then(function(comments) {
//     res.status(200).json(comments)
//   }).catch(function(error) {
//     console.log(error);
//   });
// }

CommentController.prototype.createComment = function(req, res) {
  return new Promise (function (resolve, reject) {
    console.log('COMMENT req.user: ', req.user)
    Comment.create({
      comment: req.body.comment,
      user_email: req.user.email,
      username: req.user.username,
      userid: req.user.id,
      postid: req.params.post_id
    }, function (error, comment) {
      if (error) {
        reject(error);
      } else {
        Post.findByIdAndUpdate(comment.postid, {$push: {comments: comment}}, { new: true }, (error, post) => {
          if (error) {
            console.log(error)
          }
          console.log("POST: ", post)
        })
        resolve(comment);
      }
    });
  }).then(function(comment) {

    console.log(comment)
    res.status(200).json(comment)
  }).catch(function(error) {
    console.log(error);
    return error;
  });
}

CommentController.prototype.editComment = function(req, res) {
  return new Promise (function (resolve, reject) {
    Comment.update({_id: req.params.id}, {
      content: req.body.content
    }, function (error, comment) {
      if (error) {
        reject(error);
      } else {
        resolve(comment);
      }
    });
  }).then(function(comment) {
    res.status(200).json(comment)
  }).catch(function(error) {
    console.log(error);
  });
}

CommentController.prototype.deleteComment = function(req, res) {
  return new Promise (function (resolve, reject) {
    Comment.remove({_id: req.params.id}, function (error, comment) {
      if (error) {
        reject(error);
      } else {
        resolve(comment);
      }
    });
  }).then(function(comment) {
    res.status(200).json(comment)
  }).catch(function(error) {
    console.log(error);
  });
}

module.exports = CommentController.prototype;
