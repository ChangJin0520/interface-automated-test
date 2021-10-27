import { Controller } from 'egg';

export default class HomeController extends Controller {
    public async index() {
        const { ctx } = this;

        // ctx.response.body = 'hello world!'

        await ctx.render('index.html');
    }

    public async hello() {
        const { ctx } = this;

        ctx.response.body = 'hello world!123'

        // await ctx.render('index.html');
    }
}
