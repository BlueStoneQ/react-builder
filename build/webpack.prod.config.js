/**
 * webpack配置 - devalopment模式
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'production', // 模式 - 产品模式
});