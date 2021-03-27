import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    security: {
      /** 关闭 csrf 验证 */
      csrf: {
        enable: false,
        ignoreJSON: true
      },
      /** 白名单 */
      domainWhiteList: ['*']
    },
    /** 跨域配置 */
    cors: {
      origin: "*",
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      password: 'lemon123',
      port: 3306,
      database: 'stars.community'
    },
    email: {
      service: 'qq',
      secureConnection: true,
      port: 465,
      auth: {
        user: '1879178791@qq.com',
        pass: 'elkmxmktglpvfchf'
      }
    },
    sessionRedis: {
      name: ''
    }
  };
  return config;
};
