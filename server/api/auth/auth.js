import { browserHistory } from 'react-router';

function isAuthenticated (req, res, next) {
  if(req.user) {
    console.log('WTF THERE, req.user: ',req.user)
    next();
  }
  else {
    browserHistory.push('/show_posts')
    res.status(401).json({message: 'unauthorized, please log in'});
  }
};

module.exports = isAuthenticated
