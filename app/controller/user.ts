import BaseController from '../base/BaseController'
import { Context } from 'egg'

class UserController extends BaseController {
    constructor(app: Context<any>) {
        super(app)
        this.ctx = app
    }
    /**
     * 注册
     */
    async register() {
        // 获取参数
        const { params } = this.ctx.request.body
        // 

        this.success(params)

    }
    async login() {
        this.ctx.body = 456
    }
}

export default UserController;