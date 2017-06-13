const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const config = require('./config');
const routes = require('./routes');

const server = new Hapi.Server();

require('./core/db');

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

    server.route(routes);

    server.start((err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      console.log('Server running at:', server.info.uri);
    });
  });
