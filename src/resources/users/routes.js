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
      auth: {
        strategy: 'jwt',
        scope: 'admin'
      },
      description: 'Get all the users',
      tags: ['api', 'users'],
      validate: {
        headers: Joi.object({
          authorization: Joi.string().required()
        }).unknown()
      }
    }
  },
  {
    path: '',
    method: 'POST',
    config: {
      handler: {
        async: UsersHandler.post
      },
      auth: {
        strategy: 'jwt',
        scope: 'admin'
      },
      description: 'Create user',
      tags: ['api', 'users'],
      validate: {
        payload: {
          name: Joi.string(),
          email: Joi.string().email().required(),
          password: Joi.string().required()
        },
        headers: Joi.object({
          authorization: Joi.string().required()
        }).unknown()
      }
    }
  }
];
