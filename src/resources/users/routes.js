const Joi = require('joi');

const UsersHandler = require('./handlers');

module.exports = [
  {
    path: '',
    method: 'GET',
    config: {
      handler: {
        async: UsersHandler.get
      },
      description: 'Get all the users',
      tags: ['api', 'users']
    }
  },
  {
    path: '',
    method: 'POST',
    config: {
      handler: {
        async: UsersHandler.post
      },
      description: 'Create user',
      tags: ['api', 'users'],
      validate: {
        payload: {
          name: Joi.string(),
          email: Joi.string().email().required(),
          password: Joi.string().required()
        }
      }
    }
  }
];
