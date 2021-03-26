import { Context } from 'egg'
import BaseController from '../base/BaseController'

class EmailController extends BaseController {
    constructor(app: Context<any>) {
        super(app)
        this.ctx = app
        this.service = app.service
    }
    async send() {
        // 获取参数
        // const { params } = this.ctx.request.body
        // 获取参数
        // const { account, email } = params
        // 查找是否存在用户与邮箱
        // const 
    }
}

export default EmailController