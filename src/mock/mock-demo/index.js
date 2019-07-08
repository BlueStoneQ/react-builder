import Mock from 'mockjs';
import Config from '$config';

/**
 * 数据模板
 * 1- 其实api部分也应该用一个配置文件管理起来 用一个常量代替 因为service里也使用了这个api字符串
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


