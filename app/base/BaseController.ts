/**
 * 封装 控制器 基类
 */
import { Controller } from 'egg';
import { Context } from 'egg'

class BaseController extends Controller {
    constructor(app: Context<any>) {
        super(app)
    }
    /**
     * 操作成功
     */
    success(data: any, msg: string) {
        return { data, msg, code: '0000' }
    }
    /**
     * 操作失败
     */
    fail(msg) {
        return { msg, code: '0001' };
    }
}

export default BaseController;
