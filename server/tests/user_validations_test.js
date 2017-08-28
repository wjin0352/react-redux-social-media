const assert = require('assert');
const User = require('../api/user/user.model'); 

// Here we wanted to validate records without saving to the database filling it with irrelevant information
describe('Validating records', () => {
  it('requires a username', () => {
    const user = new User({ username: undefined });
     
    // synchronous validation method since we are not saving to db. So no need for call backs. async method is validate()
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.username;
    assert(message === 'Username is required.')
  });

  it('requires a username longer than 2 characters', () => {
    const user = new User({ username: 'ab' });
    const validationResult = user.validateSync();
    const { message } = validationResult.errors.username;
    assert(message  === 'Username must be longer than 2 characters.');
  });

  it('disallows invalid records from being saved', (done) => {
    const user = new User({ username: 'je', password: '123', email: 'jenn@gmail.com' })
    user.save() 
      // .then((user) => {
      //   console.log('success: ', user)
      // })
      .catch((validationResult) => {
        const { message } = validationResult.errors.username;
        assert(message === 'Username must be longer than 2 characters.');
        done();
      });
  });
});