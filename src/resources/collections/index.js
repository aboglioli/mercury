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
      description: 'Get all the collections',
      tags: ['api', 'collection']
    }
  },
  {
    path: '',
    method: 'POST',
    config: {
      handler: {
        async: ConfigurationHandler.post
      },
      description: 'Create new collection',
      tags: ['api', 'collection'],
      validate: {
        payload: {
          name: Joi.string().required(),
          parentId: Joi.string().optional()
        }
      }
    }
  }
];
