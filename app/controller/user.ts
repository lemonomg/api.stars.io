import BaseController from '../base/BaseController'
import { Context } from 'egg'
import Jwt from "../utils/jwt";
interface userInfo {
    _id: number,
    nickname: string,
    avatar: string,
    email: string,
    account: string
    group: number
}

class UserController extends BaseController {
    private _userInfo: userInfo
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
        const { account, emailCode, password, nickname, email } = params
        // 获取redis中的code
        const hasCode = await this.service.redis.get(`${account}_REGISTER_CODE`)
        // 如果 验证码 != redis中的验证码
        if (emailCode !== hasCode) {
            return this.fail('验证码输入错误')
        }

        // 开始注册
        // 1. 获取数据
        const data = { account, password: this.service.crypt.encrypt(password), nickname, email }
        // 2. 将数据加入数据库
        const res = await this.ctx.service.users.register(data)
        if (res === "ok") {
            return this.success(res, '注册成功');
        } else {
            return this.fail(res)
        }



    }
    async login() {
        const { params } = this.ctx.request.body
        const { account, password } = params
        const dbRes = await this.service.users.findAccount(account) as any
        if (!dbRes || dbRes.password !== this.service.crypt.encrypt(password)) {
            return this.fail('登录失败，请检查用户名和密码')
        }
        this._userInfo = {
            _id: dbRes.id,
            nickname: dbRes.nickname,
            avatar: dbRes.avatar,
            email: dbRes.email,
            account: dbRes.account,
            group: dbRes.group_id
        }
        // 生成token
        const token = (new Jwt(dbRes.id)).generateToken()

        return this.success({ token, userInfo: this._userInfo }, '登录成功')

    }
}

export default UserController;