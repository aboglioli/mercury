const JWT = require('jsonwebtoken');

const config = require('../../config');
const User = require('../users/models');

class AccountHandler {
  static async get(request, reply) {
    console.log(request.auth.credentials);
    return reply(await User.findById(request.auth.credentials.id));
  }

  static async login(request, reply) {
    const {email, password} = request.payload;

    const user = await User.findOne({email, password});

    if(!user) {
      return reply({message: 'Invalid credentials'}).code(400);
    }

    return reply({
      authToken: JWT.sign({
        id: user._id
      }, config.app.jwtKey)
    });
  }

  static async register(request, reply) {
    const {name, email, password} = request.payload;

    const user = new User({name, email, password});

    await user.save();

    return reply().code(201);
  }

}

module.exports = AccountHandler;
