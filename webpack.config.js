const path = require('path');
const webpack = require('webpack');
const packageData = require('./package.json');

module.exports = {
  entry: {
    'react': './client.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  watch: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
