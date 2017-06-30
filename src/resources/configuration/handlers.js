const Configuration = require('./models');

class ConfigurationHandler {
  static async get(request, reply) {
    return reply(await Configuration.get());
  }
}

module.exports = ConfigurationHandler;
