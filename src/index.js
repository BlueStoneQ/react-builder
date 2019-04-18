import printMe from './js/print';
import HEART_IMG from '../assets/images/heart.jpg';

const rootDOM = document.getElementById('root')
rootDOM.innerHTML = printMe();
let heartImg = new Image();
heartImg.src = HEART_IMG;
rootDOM.appendChild(heartImg);

if (module.hot) {
  // module.hot.accept('./js/print', () => {
  //  console.log('Accepting the updated printMe module!');
  //    printMe();
  // })
  module.hot.accept()
}