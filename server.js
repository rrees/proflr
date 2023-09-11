
const Koa = require('koa');

const Router = require('koa-router');

const handlers = require('./handlers');

const server = new Koa();

const router = new Router();

console.log(handlers);

router.get("/", handlers.root);
router.get("/about", handlers.about);


server.use(router.routes()).listen(3001);