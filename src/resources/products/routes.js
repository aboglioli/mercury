const Joi = require('joi');

const ProductHandler = require('./handlers');

module.exports = [
  {
    path: '',
    method: 'GET',
    config: {
      handler: {
        async: ProductHandler.get
      },
      description: 'Get all the products',
      tags: ['api', 'products']
    }
  },
  {
    path: '',
    method: 'POST',
    config: {
      handler: {
        async: ProductHandler.post
      },
      auth: {
        strategy: 'jwt',
        scope: 'admin'
      },
      description: 'Create product',
      tags: ['api', 'products'],
      validate: {
        payload: {
          name: Joi.string().required(),
          description: Joi.string().required()
        },
        headers: Joi.object({
          authorization: Joi.string().required()
        }).unknown()
      }
    }
  }
];
