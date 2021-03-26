import { Service } from 'egg'
import { Context } from 'egg';
import { User } from '../model/users';
import { reg } from '../utils/reg'

// import { Sequelize } from 'sequelize-typescript'

class UserService extends Service {
    constructor(app: Context<any>) {
        super(app)
    }
    // 通过 用户名或者邮箱 查找
    async findAccount(account: string) {
        const where = reg.email.test(account) ? { email: account } : { account };
        const users = await this.ctx.model.Users.findOne({
            where: where
        })
        return users;
    }
    // 注册
    async register(data: User) {
        // 获取用户名
        const { account } = data
        // 添加之前 先检查用户名是否唯一
        const exit = await this.ctx.model.Users.findOne({ where: { account } })
        if (exit) {
            return "该用户已经存在"
        }
        const res = await this.ctx.model.Users.create({ data })
        if (res) {
            return "ok"
        }
        return "注册失败"
    }
}

export default UserService;
