const User = require('./models');

class UsersHandler {
  static async get(request, reply) {
    return reply(await User.find({}));
  }

  static async post(request, reply) {
    const {name, email, password} = request.payload;

    const user = new User({
      name,
      email,
      password
    });

    await user.save();

    return reply().code(201);
  }
}

module.exports = UsersHandler;
