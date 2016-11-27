const path = require('path');

module.exports = {
  entry: {
    'react': './client.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "[name].js",
  },
  watch: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
