import { Application } from 'egg';

export default (app: Application) => {
  require('./routes/index')(app);
  require('./routes/user')(app);
  require('./routes/base')(app);
};
