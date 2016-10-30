const path = require('path');

const MainController = function () {};

MainController.prototype.getRoot = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
}

// MainController.prototype.toReact = (req, res) => {
  // console.log('req.body', req.headers.referer)
  // res.sendFile(path.join(__dirname, '../../../public/index.html'));
// }

module.exports = MainController.prototype;
