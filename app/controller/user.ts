import BaseController from '../base/BaseController'
import { Context } from 'egg'

class UserController extends BaseController {
    constructor(app: Context<any>) {
        super(app)
        this.ctx = app
    }
    async login() {
        this.ctx.body = 456
    }
}

export default UserController;