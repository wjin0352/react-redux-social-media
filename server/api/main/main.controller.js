const path = require('path');

const MainController = function () {};

MainController.prototype.getRoot = (req, res) => {
  console.log(path.join(__dirname, '../../../public/index.html'))
  res.sendFile(path.resolve(__dirname, '../../../public/index.html'));
  // res.sendFile(path.join(__dirname, '../../../public/index.html'));
}

module.exports = MainController.prototype;
