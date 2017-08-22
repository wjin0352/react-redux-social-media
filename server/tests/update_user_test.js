const assert = require('assert');
const User = require('../api/user/user.model'); 

describe('Updating records', () => {
  let joe;

   beforeEach((done) => {
    joe = new User({username: 'Joe', email: 'joe@gmail.com', password: '123'});
    joe.save()
      .then(() => done());
  });

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].username === 'Jenn');
        done();
      });
  }

  it('Instance type using set and save', (done) => {
    joe.set('username', 'Jenn');
    assertName(joe.save(), done);
  });

  it('A model instance can update', (done) => {
    assertName(joe.update({ username: 'Jenn'}), done);
  })
});