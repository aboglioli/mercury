const Product = require('./models');

class ProductHandler {
  static async get(request, reply) {
    return reply(await Product.getAll());
  }

  static async getById(request, reply) {
    return reply(await Product.getById(request.params.productId));
  }

  static async post(request, reply) {
    const product = await Product.create(request.payload, request.auth.credentials.id);
    return reply(product).code(201);
  }
}

module.exports = ProductHandler;
