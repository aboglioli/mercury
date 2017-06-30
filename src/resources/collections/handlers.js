const {makeTree} = require('../../utils/collections');
const Collection = require('./models');

class CollectionHandler {
  static async get(request, reply) {
    const collections = await Collection.getAll();
    const collectionTree = makeTree(collections);
    return reply(collectionTree);
  }

  static async post(request, reply) {
    const collections = await Collection.create(request.payload);
    return reply().code(201);
  }
}

module.exports = CollectionHandler;
