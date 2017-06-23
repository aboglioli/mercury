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
