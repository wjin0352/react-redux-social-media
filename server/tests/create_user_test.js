const assert = require('assert');
const User = require('../api/user/user.model');

describe('creating user record', function() {
  it('saves a user', function(done) {
    const user = new User({username: 'dave', email: 'dave@gmail.com', password: '123'})
    // user.save()
    //   .then(function(res) {
    //     console.log(res);
    //     console.log(user)
    //   })
    //   .catch(function(err) {
    //     console.log('err: ', err)
    //   })
    // done()
    user.save()
    .then(function() {
      // console.log('user success', user)
      assert(!user.isNew);
      done();
    })
    // .catch(function(err) {
    //   // console.log(user)
    //   console.log('err: ', err)
    //   done();
    // })
    
  });
});