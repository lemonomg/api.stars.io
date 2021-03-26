import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = this.config.email
    // ctx.body = await ctx.service.users.findAccount('lemon123');
  }
}
