const _ = require('lodash');

const Collection = require('../../schemas/collection');
const config = require('../../config');

async function getAll() {
  // TODO: fix it
  return await Collection.find({}).lean();
}

async function create(data) {
  const collection = new Collection(data);
  return await collection.save();
}

module.exports = {
  getAll,
  create
};
