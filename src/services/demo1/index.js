/**
 * 把对server的一些后台请求封装在这里
 */
import { axios } from '$utils';

export function demoService() {
  return axios.get('/api/demo');
}