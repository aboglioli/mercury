const Product = require('../../schemas/product');

async function create(data, userId) {
  const {name, description} = data;

  const product = new Product({
    name,
    description,
    author: userId
  });
  await product.save();

  return product;
}

async function getById(productId) {
  return await Product.findById(productId);
}

async function getAll() {
  return await Product
    .find({})
    .populate('author');
}

module.exports = {
  create,
  getById,
  getAll
};
