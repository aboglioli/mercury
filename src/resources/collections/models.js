const _ = require('lodash');

const CollectionSchema = require('../../schemas/collection');
const config = require('../../config');

async function getAll() {
  return await CollectionSchema.find({}).lean();
}

async function create(data) {
  const collection = new CollectionSchema(data);
  return await collection.save();
}

module.exports = {
  getAll,
  create
};
