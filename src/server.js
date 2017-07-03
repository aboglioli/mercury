const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const config = require('./config');
const routes = require('./routes');
const { authenticate } = require('./core/authentication');

const server = new Hapi.Server();

server.connection({
  host: config.app.host,
  port: config.app.port,
  routes: {
    cors: {
      additionalHeaders: [
        'Origin'
      ]
    }
  }
});

server.ext({
  type: 'onRequest',
  method: (request, reply) => {
    const path = request.path;

    if(path.startsWith('/docs') || path.startsWith('/swagger'))
      return reply.continue();

    console.log(request.path, request.query);

    return reply.continue();
  }
});

server.register(require('hapi-async-handler'), function(err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});

server.register([
  Inert,
  Vision,
  {
    register: HapiSwagger,
    options: config.swagger
  }], (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });

server.register(require('hapi-auth-jwt2'), err => {
  if(err) {
    console.error(err);
    process.exit(1);
  }

  server.auth.strategy('jwt', 'jwt', {
    key: config.app.jwtKey,
    validateFunc: authenticate,
    verifyOptions: {
      algorithms: ['HS256']
    }
  });

  server.route(routes);
});

server.start((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
});

module.exports = server;
