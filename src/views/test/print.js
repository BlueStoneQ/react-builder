function printMe() {
  // eslint-disable-next-line no-undef
  if (IS_PROD) {
    return '<span>生产环境</span>';
  } else {
    return '<span>开发环境</span>';
  }
} 

export default printMe;