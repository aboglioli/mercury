const Product = require('./models');

async function get(request, reply) {
  if(request.query)
    return reply(await Product.find(request.query));

  return reply(await Product.find());
}

async function getById(request, reply) {
  return reply(await Product.getById(request.params.productId));
}

async function post(request, reply) {
  console.log(request.payload, request.auth.credentials.id);
  const product = await Product.create(request.payload, request.auth.credentials.id);
  return reply(product).code(201);
}

module.exports = {
  get,
  getById,
  post
};
