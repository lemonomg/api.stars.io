import { Context } from 'egg'
import BaseController from '../base/BaseController'
import { compile } from 'ejs'
import { GetRandomNum } from '../utils/index'
import fs = require('fs')
import path = require('path')

class EmailController extends BaseController {
    constructor(app: Context<any>) {
        super(app)
        this.ctx = app
        this.service = app.service
    }
    async send() {
        // 获取参数
        const { params } = this.ctx.request.body
        // 获取参数
        const { account, email } = params
        let res = await this.service.users.findAccount(account);
        if (res) {
            this.fail('该用户已被注册')
            return
        }
        res = await this.service.users.findAccount(email);
        if (res) {
            this.fail('该邮箱已被注册')
            return
        }
        const template = compile(fs.readFileSync(path.resolve(__dirname, '../public/email/register.ejs'), 'utf-8'))

        const code = GetRandomNum(100000, 999999);

        const html = template({ account, code })
        // 将 验证码 存入 cookies
        this.ctx.service.redis.set(`${account}_REGISTER_CODE`, code.toString(), 120)
        try {
            await this.service.email.send(email, html)
            this.success(1, '发送成功，请前往邮箱查看')
        } catch (error) {
            this.fail('发送失败')
        }

    }
}

export default EmailController