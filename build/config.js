/**
 * webpack需要的部分公共配置
 * 1- 公共路径配置
 */
const path = require('path');

module.exports = {
  ROOT_PATH: path.resolve(__dirname, '../'),
  SRC_PATH: path.resolve(__dirname, '../', 'src'),
  BUILD_PATH: path.resolve(__dirname, '../', 'dist')
};