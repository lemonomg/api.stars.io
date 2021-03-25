import { Service } from 'egg'

// import { Sequelize } from 'sequelize-typescript'

class UserService extends Service {
    async findAccount(account) {
        const users = await this.ctx.model.Users.findOne({
            where: { account }
        })
        return users;
    }
}

export default UserService;
