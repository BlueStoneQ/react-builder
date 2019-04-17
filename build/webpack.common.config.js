/**
 * webpack中dev和prod两种模式公用的配置
 */
const path = require('path');
const config = require('./config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT_PATH = config.ROOT_PATH;
const SRC_PATH = config.SRC_PATH;
const BUILD_PATH = config.BUILD_PATH;

module.exports = {
  entry: path.resolve(SRC_PATH, 'index.js'),
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash:8].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        include: path.resolve(SRC_PATH, 'style'),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: [ {
          loader: MiniCssExtractPlugin.loader,

        }, 'css-loader', 'less-loader' ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
};