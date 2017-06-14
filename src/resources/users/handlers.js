const User = require('./models');

class UsersHandler {
  static async get(request, reply) {
    return reply(await User.getAll());
  }

  static async post(request, reply) {
    const user = User.create(request.payload);
    return reply().code(201);
  }
}

module.exports = UsersHandler;
