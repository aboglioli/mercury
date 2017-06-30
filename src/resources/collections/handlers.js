const {makeTree} = require('../../utils/collections');
const Collection = require('./models');

async function get(request, reply) {
  const collections = await Collection.getAll();
  const collectionTree = makeTree(collections);
  return reply(collectionTree);
}

async function post(request, reply) {
  const collections = await Collection.create(request.payload);
  return reply().code(201);
}

module.exports = {
  get,
  post
};
