/**
 * webpack.dll.config.js
 * 1- 只需要单独执行一次，或者在依赖升级后执行一次
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    less: ['less']
  },
  output: {
    filename: '[name].dll.js',
    library: '_dll_[name]', // 防止与全局变量冲突，在manifest参与映射的名称
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: path.resolve(__dirname, 'dist', '[name].manifest.json') // 生成manifest的路径和文件名
    })
  ]
}