/**
 * 项目基础配置
 */

/**
* 共有的配置
*/
const comConfig = {
  // nothing
  API_BASE_URL: '127.0.0.1:1001', // API基础地址
  MOCK_ABLE: false // 是否打开
};

/**
 * 开发环境下的配置
 */
const devConfig = {
  API_BASE_URL: '127.0.0.1:1001',
  MOCK_ABLE: true
};

/**
 * 产品环境下的配置
 */
const prodConfig = {
  // 待定
};

Object.assign(comConfig, process.env.NODE_ENV === 'production' ? prodConfig : devConfig);

export default comConfig;