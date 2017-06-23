const Product = require('../../schemas/product');

async function create(data, userId) {
  const {name, description, price} = data;

  const product = new Product({
    name,
    description,
    price,
    author: userId
  });
  await product.save();

  return product;
}

async function getById(productId) {
  return await Product.findById(productId).populate('author');
}

async function find(filters = {}) {
  return await Product
    .find(filters)
    .populate('author', '_id name email scope');
}

module.exports = {
  create,
  getById,
  find
};
