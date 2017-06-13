const joinUrl = require('url-join');

function buildRoutes(config, routes) {
  let endpoints = [];

  Object.keys(routes).forEach(key => {
    endpoints = [
      ...endpoints,
      ...routes[key].map(route => {
        route.path = joinUrl(
          config.prefix,
          config.version,
          key,
          route.path
        );

        route.path = '/' + route.path;

        return route;
      })
    ];
  });

  return endpoints;
}

module.exports = {
  buildRoutes
}
