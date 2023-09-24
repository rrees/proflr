
async function about(ctx) {
	ctx.render('about', {});
}

async function root(ctx) {
	ctx.render('home', {});
}

module.exports = {
	about: about,
	root: root,
}