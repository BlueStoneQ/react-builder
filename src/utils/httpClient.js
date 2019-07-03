import axios from 'axios';
import config from 'config';

// mock拦截器在开发模式下打开
process.env.NODE_ENV === 'development' && !!config.MOCK_ABLE && require('../mock');

// axios基础配置
Object.assign(axios.defaults, {
  baseURL: config.API_BASE_URL, // url基础地址
  headers: {
    'X-Requested-With': 'XMLHttpRequest' // ajax请求
  },
  withCredentials: false, // 跨域请求时是否需要凭证
  showLoading: true, //是否显示遮罩
  showError: true, //返回错误时是否显示错误信息
  timeout: 15000 //超时设置
});

// 添加请求拦截器
axios.interceptors.request.use(function (conf) {
  // 在发送请求之前做些什么
  return conf;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios;