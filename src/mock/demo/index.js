import Mock from 'mockjs';
import Config from 'config';

/**
 * 数据模板
 */
Mock.mock(`${Config.API_BASE_URL}/api/demo`, function () {
  const data = Mock.mock({
    'array|4': [{
      title: '@ctitle',
      total: '@integer(100, 2000)',
      'data|10': ['@integer()']
    }]
  });
  return data['array'];
});


