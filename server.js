
const Koa = require('koa');

const Router = require('koa-router');

const nunjucks = require('koa-nunjucks-async');

const handlers = require('./handlers');

const server = new Koa();

const router = new Router();


router.get("/", handlers.root);
router.get("/about", handlers.about);

const nunjucksOptions = {
	ext: '.njk',
}

server.use(nunjucks('views', nunjucksOptions)).use(router.routes()).listen(3001);