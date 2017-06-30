const Configuration = require('./models');

async function get(request, reply) {
  return reply(await Configuration.get());
}

module.exports = {
  get
};
