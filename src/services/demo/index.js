import { axios } from 'utils';

export function demoService() {
  return axios.get('/api/demo');
}