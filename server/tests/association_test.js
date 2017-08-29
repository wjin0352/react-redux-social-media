const mongoose = require('mongoose');
const User = require('../api/user/user.model'); 
const Post = require('../api/post/post.model');
const Comment = require('../api/comment/comment.model');
const assert = require('assert');

describe('Associations ', () => {
  let joe, post, comment;
  beforeEach((done) => {
    joe = new User({ username: 'Joe', password: '123', email: 'joe@gmail.com' });
    post = new Post({ title: 'title', content: 'content' });
    comment = new Comment({ comment: 'this is a comment' });

    // pushing the entire object mongoose will take care of the rest.
    joe.posts.push(post);
    post.comments.push(comment);
    post.userid = joe;
    comment.userid = joe;
    comment.postid = post;

    Promise.all([joe.save(), post.save(), comment.save()])
      .then(() => done());    
  });

  it('saves a relation between user and post', (done) =>{
    User.findOne({ username: 'Joe' })
      .populate('posts')
      .then((user) => {
        console.log(user);
        assert(user.posts[0].title === 'title');
        done();
      });
  });

  it('saves a full relational graph', (done) => {
    User.findOne({ username: 'Joe' })
      .populate({ 
        path: 'posts',
        populate: { 
          path: 'comments',
          model: 'Comment',
          populate: {
            path: 'userid',
            model: 'User'
          }
        }
      })
      .then((user) => {
        const { posts } = user;
        const { comments } = posts[0];
        assert(user.username === 'Joe');
        assert(posts[0].title === 'title');
        assert(comments[0].comment === 'this is a comment')
        assert(comments[0].userid.username === 'Joe');
        done();
      });
  });
});