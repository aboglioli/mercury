const package = require('../../package');

module.exports = {
  app: {
    host: '0.0.0.0',
    port: 3000,
    routes: {
      prefix: 'api',
      version: 'v1'
    }
  },
  database: {
    host: 'mongodb',
    port: 27017,
    name: 'saturn'
  },
  swagger: {
    info: {
      title: 'Saturn API Documentation',
      version: package.version
    },
    basePath: '/api/v1',
    documentationPath: '/docs',
    grouping: 'tags'
    // tags: [{
    //   name: 'hello',
    //   description: 'Customer accounts'
    // }]
  }
};
