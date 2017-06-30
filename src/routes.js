const url = require('url');

const config = require('./config');
const { buildRoutes } = require('./utils/routes');

const setup = require('./resources/setup/routes');
const users = require('./resources/users/routes');
const account = require('./resources/account/routes');
const products = require('./resources/products/routes');

const routes = {
  users,
  account,
  setup,
  products
};

module.exports = buildRoutes(config.app.routes, routes);
