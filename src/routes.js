const url = require('url');

const config = require('./config');
const hello = require('./resources/hello/routes');

const routes = {
  hello
};

let endpoints = [];

Object.keys(routes).forEach(key => {
  endpoints = [
    ...endpoints,
    ...routes[key].map(route => {
      route.path = [
        config.app.routes.prefix,
        config.app.routes.version,
        key,
        route.path
      ].join('/');

      route.path = '/' + route.path.substring(0, route.path.length - 1);

      return route;
    })
  ];
});

module.exports = endpoints;
