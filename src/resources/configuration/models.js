const _ = require('lodash');

const Configuration = require('../../schemas/configuration');
const config = require('../../config');

async function get() {
  return Object.assign({},
                       {configuration: await Configuration.findOne({})},
                       {app: _.omit(config.app, ['jwtKey'])});
}

async function set(data) {
  await Configuration.find({}).remove();

  const configuration = new Configuration(data);
  await configuration.save();

  return data;
}

module.exports = {
  get,
  set
};
