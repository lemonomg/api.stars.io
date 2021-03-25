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
      origin: "http://localhost:8080",
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
      credentials: true
    },
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      username: 'root',
      password: 'lemon123',
      port: 3306,
      database: 'stars.community'
    }
  };
  return config;
};
