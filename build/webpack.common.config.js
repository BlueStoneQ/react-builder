/**
 * webpack中dev和prod两种模式公用的配置
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config');

const ROOT_PATH = config.ROOT_PATH;
const SRC_PATH = config.SRC_PATH;
const BUILD_PATH = config.BUILD_PATH;

module.exports = {
  entry: path.resolve(SRC_PATH, 'index.js'),
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash:8].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      
    })
  ]
};