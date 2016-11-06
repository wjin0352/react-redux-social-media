const Comment = require('./comment.model');

const CommentController = function () {};

CommentController.prototype.getComments = function(req, res) {
  return new Promise (function (resolve, reject) {
    Comment.find({}, function (error, comments) {
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

CommentController.prototype.createComment = function(req, res) {
  return new Promise (function (resolve, reject) {
    console.log('COMMENT req.body: ', req.body)
    Comment.create({
      comment: req.body.comment,
      userid: req.user.id,
      postid: req.body.id
    }, function (error, comment) {
      if (error) {
        reject(error);
      } else {
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
