// 这是js注释
// 只有在js中引入的css文件才会被解析插入,最后被插入到bundle.js中，并把bundle.js插入页面中
import './style/test.css';
console.log('welcome to use webpack!!');