// 这是js注释
// 只有在js中引入的css文件才会被解析插入,最后被插入到bundle.js中，并把bundle.js插入页面中
import '../style/test.css';
import '../style/less/test.less';

function printMe() {
  console.log('pintMe')
  return '<span>1cduwhcw123adadecd89</span>'
} 

export default printMe