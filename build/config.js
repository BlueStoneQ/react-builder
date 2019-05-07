/**
 * webpack需要的部分公共配置
 * 1- 公共路径配置
 */
const path = require('path');
const IS_DEV = process.env.NODE_ENV === 'development';

const ROOT_PATH = path.resolve(__dirname, '../');

module.exports = {
  PORT: 3002,
  ROOT_PATH: ROOT_PATH,
  SRC_PATH: path.resolve(ROOT_PATH, 'src'),
  BUILD_PATH: path.resolve(ROOT_PATH, 'dist'), // 打包后结果路径
  PUBLIC_DIR: path.resolve(ROOT_PATH, 'public'), // 静态资源实际路径
  // PUBLIC_PATH: IS_DEV ? ROOT_PATH : ROOT_PATH // 目前dev和prod环境下。publlicpath都设置为根目录 
};