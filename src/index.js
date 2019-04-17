import printMe from './js/print';

document.getElementById('root').innerHTML = printMe();

if (module.hot) {
  // module.hot.accept('./js/print', () => {
  //  console.log('Accepting the updated printMe module!');
  //    printMe();
  // })
  module.hot.accept()
}