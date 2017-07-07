const Configuration = require('../../models/configuration');

async function get(request, reply) {
  return reply(await Configuration.get());
}

module.exports = {
  get
};
