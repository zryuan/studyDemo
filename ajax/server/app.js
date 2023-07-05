const koa = require('koa');
const koaRouter = require('koa-router');

const app = new koa();
const router = new koaRouter();

router.get('/app', async ctx => {
    ctx.body = {
        name: 'zhangsan',
        age: 18
    }
})

app.use(router.routes());

app.listen(8080, () => {
    console.log('server is runing....');
})