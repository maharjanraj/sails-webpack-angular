const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = {

  options: common,

  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
  ]
};

