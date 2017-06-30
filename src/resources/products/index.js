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
      tags: ['api', 'products'],
      validate: {
        query: {
          sku: Joi.string().optional(),
          collections: Joi.string().optional(),
          name: Joi.string().optional()
        }
      }
    }
  },
  {
    path: '/{productId}',
    method: 'GET',
    config: {
      handler: {
        async: ProductHandler.getById
      },
      description: 'Get product by id',
      tags: ['api', 'products'],
      validate: {
        params: {
          productId: Joi.string().required().description('Product Id')
        }
      }
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
          enabled: Joi.boolean().optional(),
          sku: Joi.string().required(),
          name: Joi.string().required(),
          description: Joi.string().required(),
          price: Joi.object({
            currency: Joi.string().required(),
            vat: Joi.number().required(),
            retail: Joi.number().required(),
            wholesale: Joi.number().required()
          }).required(),
          images: Joi.array().items(Joi.string()).optional(),
          stock: Joi.number().required(),
          collections: Joi.array().items(Joi.string()).optional()
        },
        headers: Joi.object({
          authorization: Joi.string().required()
        }).unknown()
      }
    }
  }
];
