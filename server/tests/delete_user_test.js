const assert = require('assert');
const User = require('../api/user/user.model');

describe('Deleting a user', () => {
  let joe;

   beforeEach((done) => {
    joe = new User({username: 'Joe', email: 'joe@gmail.com', password: '123'});
    joe.save()
      .then(() => done());
  });

  it('model instance remove', (done) => {
    joe.remove()
      .then(() => User.findOne({ username: 'Joe'}))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method remove', (done) => {
    User.remove({ username: 'Joe' })
      .then(() => User.findOne({ username: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method findAndRemove', (done) => {
    User.findOneAndRemove({ username: 'Joe' })
      .then(() => User.findOne({ username: 'Joe' }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it('class method findByIdAndRemove', (done) => {
    User.findByIdAndRemove({ _id: joe._id })
      .then(() => User.findOne({ _id: joe._id }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

});