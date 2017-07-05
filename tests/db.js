const User = require('../src/resources/users/models');
const Product = require('../src/resources/products/models');

async function createAdminAccount(data) {
  const admin = Object.assign({}, data, {scope: ['admin']});

  await User.removeAll();
  await User.create(admin);
}


function createRandomProducts(quantity = 1) {
  // const createRandomProduct = () => ({
  //   enabled: Math.random
  // });
}

module.exports = {
  createAdminAccount
};
