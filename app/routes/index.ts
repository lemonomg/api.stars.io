import { Application } from 'egg';

module.exports = (app: Application) => {
    app.router.get('/', app.controller.home.index);
}