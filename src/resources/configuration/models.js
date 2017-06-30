const _ = require('lodash');

const ConfigurationSchema = require('../../schemas/configuration');
const config = require('../../config');

async function get() {
  return Object.assign({},
                       {configuration: await ConfigurationSchema.findOne({})},
                       {app: _.omit(config.app, ['jwtKey'])});
}

async function set(data) {
  await ConfigurationSchema.find({}).remove();

  const configuration = new ConfigurationSchema(data);
  await configuration.save();

  return data;
}

module.exports = {
  get,
  set
};
