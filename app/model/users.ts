import { AutoIncrement, Default, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript'

@Table({
    modelName: 'user',
})
export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        comment: '用户id'
    })
    id: number

    @Column({
        type: DataType.STRING(20),
        comment: '登录名',
    })
    account: string

    @Column({
        type: DataType.STRING(128),
        comment: '登录密码',
    })
    password: string

    @Column({
        type: DataType.STRING(10),
        comment: '昵称',
    })
    nickname: string

    @Column({
        type: DataType.STRING(255),
        comment: '头像',
    })
    avatar: string

    @Column({
        type: DataType.STRING(50),
        comment: '邮箱',
    })
    email: string

    @Default(1)
    @Column({
        type: DataType.INTEGER,
        comment: '分组id',
    })
    group_id: number
}

export default () => User