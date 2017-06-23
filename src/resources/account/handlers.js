const JWT = require('jsonwebtoken');

const config = require('../../config');
const User = require('../users/models');
const { comparePasswords } = require('../../core/authentication');

class AccountHandler {
  static async get(request, reply) {
    return reply(await User.getById(request.auth.credentials.id));
  }

  static async login(request, reply) {
    const {email, password} = request.payload;

    const user = await User.getByEmail(email);

    console.log('login');
    console.log(password);
    console.log(user.password);

    if(!user || !comparePasswords(password, user.password)) {
      return reply({message: 'Invalid credentials'}).code(400);
    }

    return reply({
      authToken: JWT.sign({
        id: user._id
      }, config.app.jwtKey)
    });
  }

  static async register(request, reply) {
    const user = await User.create(request.payload);
    return reply().code(201);
  }

}

module.exports = AccountHandler;
