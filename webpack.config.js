var path = require('path');
var webpack = require('webpack');

var PATHS = {
  compiled: path.join(__dirname, 'proc-web/dist/scripts'),
  src: path.join(__dirname, 'proc-web/src/main.js')
};

module.exports = {
  entry: [
    PATHS.src
  ],
  output: {
    path: PATHS.compiled,
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {}
};