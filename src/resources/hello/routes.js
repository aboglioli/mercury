const Joi = require('joi');

const HelloHandler = require('./handlers');

module.exports = [
  {
    path: '',
    method: 'GET',
    config: {
      handler: {
        async: HelloHandler.get
      },
      description: 'Hello!',
      tags: ['api', 'hello']
    }
  }
];
