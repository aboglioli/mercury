const ProductSchema = require('./schemas/product');

async function create(data, author) {
  const product = new ProductSchema(Object.assign({}, data, {author}));
  await product.save();

  return getById(product._id);
}

async function getById(productId) {
  return await ProductSchema
    .findById(productId)
    .populate('author')
    .populate('collections');
}

async function find(filters = {}) {
  return await ProductSchema
    .find(filters)
    .populate('author', 'name email scope')
    .populate('collections');
}

module.exports = {
  create,
  getById,
  find
};
