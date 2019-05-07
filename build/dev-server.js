/**
 * webpack - 本地开发服务器
 */
const path = require("path");
const express = require("express");
const webpack = require("webpack");
const config = require('./config');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const open = require('open');

const webpackConfig = require('./webpack.dev.config');

const compiler = webpack(webpackConfig);

const PORT = config.PORT;
const URL = `http://localhost:${PORT}`;

const app = express();
 
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
  })
);

app.use(webpackHotMiddleware(compiler, {
  noInfo: true,
}));

// 设置访问静态文件的路径
// app.use(express.static(DIST_DIR));
 
module.exports = app.listen(PORT, (err) => {
  // 打开默认浏览器
  open(URL);
  console.log(`- Local: ${URL}`)
});





