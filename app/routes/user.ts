import { Application } from 'egg'

module.exports = (app: Application) => {
    app.router.post('/api/user/login', app.controller.user.login)
    app.router.post('/api/user/register', app.controller.user.register)
}