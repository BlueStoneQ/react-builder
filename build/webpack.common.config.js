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

module.exports = {
  entry: [
    path.resolve(SRC_PATH, 'index.js')
  ],
  output: {
    path: BUILD_PATH,
    filename: '[name].[hash:8].bundle.js'
  },
  resolve: {
    alias: {
      '$public': path.resolve(ROOT_PATH, 'public'),
      '$src': path.resolve(SRC_PATH),
      '$views': path.resolve(SRC_PATH, 'views'),
      '$components': path.resolve(SRC_PATH, 'components'),
      '$config': path.resolve(SRC_PATH, 'config'),
      '$utils': path.resolve(SRC_PATH, 'utils'),
      '$redux': path.resolve(SRC_PATH, 'redux'),
      '$mock': path.resolve(SRC_PATH, 'mock'),
      '$services': path.resolve(SRC_PATH, 'services')
    },
    extensions: [ '.js', '.jsx', '.json' ]
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: [ 'babel-loader', 'eslint-loader' ]
      },
      {
        test: /\.(css|less)$/,
        include: path.resolve(SRC_PATH),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development', // 根据当前运行环境 决定是否启用样式的热启动
            },
          }, {
            loader: 'css-loader',
            options: {
              modules: true // 开启css-module
            }
          }, 'postcss-loader', 'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        include: path.resolve(ROOT_PATH, 'public', 'assets'),
        exclude: path.resolve(ROOT_PATH, 'node_modules'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024, // 图片小于8kb 打包为base64
              outputPath: 'images'
            }
          }
        ]
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