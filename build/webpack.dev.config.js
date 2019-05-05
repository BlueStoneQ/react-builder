/**
 * webpack配置 - devalopment模式
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.config');
const config = require('./config');

const ROOT_PATH = config.ROOT_PATH;
const PORT = config.PORT;

module.exports = merge(common, {
  mode: 'development', // 模式 - 开发模式
  devtool: 'eval-source-map',
  devServer: {
    open: true, // 服务起动后自动打开浏览器
    overlay: {
      warnings: true,
      errors: true
    }, // 报错到浏览器屏幕
    compress: true,
    port: PORT,
    contentBase: './dist'
  },
  plugins: [
    // https://github.com/jantimon/html-webpack-plugin#configuration
    new HtmlWebpackPlugin({
      filename: 'index.html', // 在dist/（这个路径由webpack的output指定）中最终生成的html文件的名称，默认为index.html
        // html的来源（source,模板文件）,默认为'src/index.ejs'， 其实html也可以作为源文件(但是html作为template文件，就无法使用title这样的模板设置)
      template: path.resolve(ROOT_PATH, 'public','index.html')
    }),
    new webpack.DefinePlugin({
      IS_PROD: JSON.stringify(false),
    }),
  ]
});