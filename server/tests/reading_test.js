const assert = require('assert');
const User = require('../api/user/user.model');

describe('Reading users out of database', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({username: 'Joe', email: 'joe@gmail.com', password: '123'});
    joe.save()
      .then(() => done());
  });

  it('finds all users with name of joe', (done) => {
    User.find({ username: 'Joe'} )
      .then((users) => {
        assert(users[0]._id.toString() === joe._id.toString());
        done();
      });
  });
});