// 这是js注释
// 只有在js中引入的css文件才会被解析插入,最后被插入到bundle.js中，并把bundle.js插入页面中
import '../style/test.css';
import '../style/less/test.less';

function printMe() {
  console.log('pintMe')
  return '<div>1cduwhcw123adadecd89</div>'
} 

export default printMe