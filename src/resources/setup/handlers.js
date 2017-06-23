const { generateHash } = require('../../core/authentication');
const User = require('../users/models');

class SetupHandler {
  static async get(request, reply) {
    await User.removeByEmail('admin@admin.com');

    const user = await User.create({
      name: 'Admin',
      email: 'admin@admin.com',
      password: '123456',
      scope: ['admin']
    });

    reply(user).code(201);
  }
}

module.exports = SetupHandler;
