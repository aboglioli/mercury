const url = require('url');

const config = require('./config');
const { buildRoutes } = require('./utils/routes');
const hello = require('./resources/hello/routes');
const users = require('./resources/users/routes');
const account = require('./resources/account/routes');

const routes = {
  hello,
  users,
  account
};

module.exports = buildRoutes(config.app.routes, routes);
