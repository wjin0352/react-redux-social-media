const userRouter = require( '../api/user/user.router');
const mainRouter = require('../api/main/main.router');
const postRouter = require('../api/post/post.router');
const videoRouter = require('../api/video/video.router');
const commentRouter = require('../api/comment/comment.router');

module.exports = function(app) {
  app.use('/', mainRouter);
  app.use('/users', userRouter);
  app.use('/posts', postRouter);
  app.use('/videos', videoRouter);
  app.use('/comments', commentRouter);
}
