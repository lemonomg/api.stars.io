import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize-ts'
  },
  session: {
    enable: true,
  }
};

export default plugin;
