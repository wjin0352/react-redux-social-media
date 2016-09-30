const userRouter = require( '../api/user/user.router');
const mainRouter = require('../api/main/main.router');
const postRouter = require('../api/main/post.router');

module.exports = function(app) {
  app.use('/', mainRouter);
  app.use('/users', userRouter);
  app.use('/posts', postRouter);
}
