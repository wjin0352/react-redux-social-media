const userRouter = require( '../api/user/user.router');
const mainRouter = require('../api/main/main.router');

module.exports = function(app) {
  app.use('/', mainRouter);
  app.use('/users', userRouter);
}
