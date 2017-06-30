const _ = require('lodash');

function omitDeep(collection, excludeKeys) {

  function omitFn(value) {

    if (value && typeof value === 'object') {
      excludeKeys.forEach((key) => {
        delete value[key];
      });
    }
  }

  return _.cloneDeepWith(collection, omitFn);
}

module.exports = {
  omitDeep
};
