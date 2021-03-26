import { Application } from 'egg';

module.exports = (app: Application) => {
    app.router.post('/api/base/getCode', app.controller.email.send);
}