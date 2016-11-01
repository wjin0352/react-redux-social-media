const path = require('path');

const MainController = function () {};

MainController.prototype.getRoot = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
}

module.exports = MainController.prototype;
