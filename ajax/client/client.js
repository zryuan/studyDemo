const koa = require('koa');
const koaRouter = require('koa-router');
const KoaStaticCache = require('koa-static-cache');
const KoaBodyParser = require('koa-bodyparser');

const app = new koa();
const router = new koaRouter();

app.use(KoaBodyParser());

app.use(KoaStaticCache('./', {
    prefix: '/',
    gzip: true,
    dynamic: true
}))

router.get('/', async ctx => {
    ctx.body = 'welcome...'
})

router.get('/app', async ctx => {
    console.log(ctx.query)
    ctx.body = {
        name: 'zhangsan',
        age: 18
    }
})

router.post('/app', async ctx => {
    console.log(ctx.request.body, "!!!", ctx.query.id);
    ctx.body = {
        name: 'zhangsan1',
        age: 20
    }
})

app.use(router.routes());

app.listen('80', () => {
    console.log('client is running...');
})