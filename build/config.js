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
  DIST_DIR: path.resolve(__dirname, '../', 'dist') // 静态资源路径
};