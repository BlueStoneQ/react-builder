/**
 * webpack需要的部分公共配置
 * 1- 公共路径配置
 */
const path = require('path');

module.exports = {
  PORT: 3002,
  ROOT_PATH: path.resolve(__dirname, '../'),
  SRC_PATH: path.resolve(__dirname, '../', 'src'),
  BUILD_PATH: path.resolve(__dirname, '../', 'dist'), // 打包后结果路径
  PUBLIC_DIR: path.resolve(__dirname, '../', 'public') // 静态资源实际路径
};