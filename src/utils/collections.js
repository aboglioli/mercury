const _ = require('lodash');

function makeTree(collections) {
  return collections.reduce((arr, el) => {
    if(el.parentId) {
      const parent = collections.find(p => p._id.toString() === el.parentId);

      if(!parent['children'] || !Array.isArray(parent['children'])) {
        parent['children'] = [];
      }

      parent.children.push(el);

      return arr;
    }

    delete el.parentId;

    return [...arr, el];
  }, []);
}

module.exports = {
  makeTree
}
