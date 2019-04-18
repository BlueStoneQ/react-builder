/**
 * webpack配置 - devalopment模式
 */
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.config');
const config = require('./config');

const SRC_PATH = config.SRC_PATH;

module.exports = merge(common, {
  mode: 'production', // 模式 - 产品模式
  plugins: [
    // https://github.com/jantimon/html-webpack-plugin#configuration
    new HtmlWebpackPlugin({ // 打包生成html文件，并动态地引入打包后的bundle.[hash].js文件
      // favicon: '',
      filename: 'index.html', // 在dist/（这个路径由webpack的output指定）中最终生成的html文件的名称，默认为index.html
       // html的来源（source,模板文件）,默认为'src/index.ejs'， 其实html也可以作为源文件(但是html作为template文件，就无法使用tittle这样的模板设置)
      template: path.resolve(SRC_PATH, 'index.html'), 
      // 其实在mode=production的情况下，以下minify的选项会默认开启
      hash: true, // 对引入的script/css文件打上hash戳，
      minify: { // 优化：压缩实际用的是html-minifiler https://github.com/kangax/html-minifier
        collapseWhitespace: false, // 删除空格（不会删除SCRIPT、style和textarea中的空格）
        removeComments: true, // 打包后去除html中的注释等（保留<style>和<script>中的数据）
        removeRedundantAttributes: true, // 删除多余的属性
        removeScriptTypeAttributes: true, // 删除<script>中的type类型，H5下的script默认type为：text/javascript
        removeStyleLinkTypeAttributes: true, // 删除<style>中的type属性
        useShortDoctype: true, // 使用短的文档类型
        removeAttributeQuotes: true, // 删除引号（删除不需要引号的值）- 有待测试
        removeCommentsFromCDATA: true // 从脚本和样式中删除注释
      }
    }),
    new OptimizeCssAssetsPlugin()
  ]
});