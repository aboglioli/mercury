const Joi = require('joi');

const ConfigurationHandler = require('./handlers');

module.exports = [
  {
    path: '',
    method: 'GET',
    config: {
      handler: {
        async: ConfigurationHandler.get
      },
      description: 'Get all the configuration',
      tags: ['api', 'configuration']
    }
  }
];
