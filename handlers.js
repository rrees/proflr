
async function about(ctx) {
	ctx.body = 'About this application';
}

async function root(ctx) {
	ctx.body = 'Hello from Koa!';
}

module.exports = {
	about: about,
	root: root,
}