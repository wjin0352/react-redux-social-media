const Video = require('./video.model');

const VideoController = function () {};

VideoController.prototype.getVideos = function (req, res) {
  return new Promise (function (resolve, reject) {
    Video.find({}, function (error, videos) {
      if (error) {
        reject(error);
      } else {
        resolve(videos);
      }
    });
  }).then(function (videos) {
    res.status(200).json(videos);
  }).catch(function (error) {
    console.log(error);
  });
}

VideoController.prototype.createVideo = function(req, res) {
  return new Promise (function (resolve, reject) {
    Video.create({
      videolink: req.body.videolink,
      description: req.body.description,
      title: req.body.title,
      comments: req.body.comments,
      userid: req.user
    }, function (error, video) {
      if (error) {
        reject(error);
      } else {
        resolve(video);
      }
    });
  }).then(function (video) {
    res.status(200).json(video);
  }).catch(function (error) {
    console.log(error);
  });
}

VideoController.prototype.editVideo = function(req, res) {
  return new Promise (function (resolve, reject) {
    Video.update({_id: req.params.id}, {
      videolink: req.body.videolink,
      description: req.body.description,
      comments: req.body.comments,
    }, function (error, video) {
      if (error) {
        reject(error);
      } else {
        resolve(video);
      }
    });
  }).then(function (video) {
    res.status(200).json(video);
  }).catch(function (error) {
    console.log(error);
  });
}

VideoController.prototype.deleteVideo = function(req, res) {
  return new Promise (function (resolve, reject) {
    Video.remove({_id: req.params.id}, function (error, video) {
      if (error) {
        reject(error);
      } else {
        resolve(video);
      }
    });
  }).then(function (video) {
    res.status(200).json(video);
  }).catch(function (error) {
    console.log(error);
  });
};

module.exports = VideoController.prototype;
