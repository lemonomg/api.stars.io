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
        const { account, emailCode, password, nickname, email } = params
        // 获取redis中的code
        const hasCode = await this.service.redis.get(`${account}_REGISTER_CODE`)
        // 如果 验证码 != redis中的验证码
        if (emailCode !== hasCode) {
            return this.fail('验证码输入错误')
        }

        // 开始注册
        // 1. 获取数据
        const data = { account, password, nickname, email }
        // 2. 将数据加入数据库
        const res = await this.ctx.service.users.register(data)
        if (res === "ok") {
            return this.success(res, '注册成功');
        } else {
            return this.fail(res)
        }



    }
    async login() {
        this.ctx.body = 456
    }
}

export default UserController;