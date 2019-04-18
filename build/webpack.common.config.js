/**
 * webpack中dev和prod两种模式公用的配置
 */
const path = require('path');
const config = require('./config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_PATH = config.ROOT_PATH;
const SRC_PATH = config.SRC_PATH;
const BUILD_PATH = config.BUILD_PATH;

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

module.exports = {
  entry: path.resolve(SRC_PATH, 'index.js'),
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash:8].bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        include: path.resolve(SRC_PATH),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
      },
      {
        test: /\.(css|less)$/,
        include: path.resolve(SRC_PATH),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: [ {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it uses publicPath in webpackOptions.output
            publicPath: '../',
            hmr: process.env.NODE_ENV === 'development', // 根据当前运行环境 决定是否启用样式的热启动
          },
        }, 'css-loader', 'postcss-loader', 'less-loader' ]
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
    new CleanWebpackPlugin()
  ]
};