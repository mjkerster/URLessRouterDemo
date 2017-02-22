const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    alias: {
      URLessRouter: path.resolve(__dirname, 'node_modules/urlessrouter/dist/URLessRouter.js')
    }
  }
};