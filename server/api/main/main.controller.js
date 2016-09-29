const path = require('path');

const MainController = function () {};

MainController.prototype.getRoot = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
}

// export default MainController.prototype;
module.exports = MainController.prototype;
