const Hapi = require('hapi');
const routes = require('./routes.js');

const server = new Hapi.Server({
	connections: { router: { isCaseSensitive: false }, routes: { cors: true } }
});

server.connection({ port: 3000 });

server.route(routes);

server.start((error) => {
	if (error) { throw error };
	console.log(`Server running at: ${server.info.uri}`);
});