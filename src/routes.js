const url = require('url');

const config = require('./config');
const { buildRoutes } = require('./utils/routes');

const setup = require('./resources/setup');
const users = require('./resources/users');
const account = require('./resources/account');
const products = require('./resources/products');
const configuration = require('./resources/configuration');

const routes = {
  users,
  account,
  setup,
  products,
  configuration
};

module.exports = buildRoutes(config.app.routes, routes);
