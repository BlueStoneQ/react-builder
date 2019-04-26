/**
 * webpack.dll.config.js
 * 1- 只需要单独执行一次，或者在依赖升级后执行一次
 */
const path = require('path');
const webpack = require('webpack');
const config = require('./config');

const ROOT_PATH = config.ROOT_PATH;

module.exports = {
  entry: {
    less: ['less']
  },
  output: {
    filename: '[name].dll.js',
    library: '_dll_[name]', // 防止与全局变量冲突，在manifest参与映射的名称
    path: path.resolve(ROOT_PATH, 'dist')
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '_dll_[name]',
      path: path.resolve(ROOT_PATH, 'dist', 'manifest.json') // 生成manifest的路径和文件名
    })
  ]
}