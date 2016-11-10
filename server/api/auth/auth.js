function isAuthenticated (req, res, next) {
  if(req.user) {
    next();
  }
  else {
    res.status(401).json({message: 'unauthorized, please log in'});
  }
};

module.exports = isAuthenticated
