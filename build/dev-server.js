/**
 * webpack - 本地开发服务器
 */
const express = require("express");
const webpack = require("webpack");
const config = require('./config');
const WebpackDevMiddleware = require("webpack-dev-middleware");
const WebpackHotMiddleware = require("webpack-hot-middleware");
const open = require('open');
const chalk = require('chalk');
const ip = require('ip');

let webpackConfig = require('./webpack.dev.config');

// HMR - 增加到entry
webpackConfig.entry.push('webpack-hot-middleware/client');

const compiler = webpack(webpackConfig);

// webpack-dev-middleware instance
const devMiddleware = WebpackDevMiddleware(compiler, {
  noInfo: true,
});

// webpack-hot-middleware instance
const hotMiddleware = WebpackHotMiddleware(compiler, {
  noInfo: true,
});

const PORT = config.PORT;
const PUBLIC_DIR = config.PUBLIC_DIR;
const URL = `http://localhost:${PORT}`;
const ipURL = `http://${ip.address()}:${PORT}`;

const app = express();
 
app.use(devMiddleware);

app.use(hotMiddleware);

// 设置访问静态文件的路径   http://www.expressjs.com.cn/starter/static-files.html
app.use('/static', express.static(PUBLIC_DIR));

// 启动gzip压缩
app.use(require('compression')());
 
module.exports = app.listen(PORT);

// 编译完成后回调 https://github.com/webpack/webpack-dev-middleware#waituntilvalidcallback
devMiddleware.waitUntilValid(function() {
  // 打包成功后作出提示
  console.log(chalk.cyan(`- Local: ${URL}`));
  console.log(chalk.cyan(`- On Your NetWork: ${ipURL}`));
  // 打开默认浏览器
  open(URL);
})





