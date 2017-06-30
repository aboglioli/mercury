const User = require('./models');

async function get(request, reply) {
  return reply(await User.getAll());
}

async function post(request, reply) {
  const user = await User.create(request.payload);
  return reply().code(201);
}

module.exports = {
  get,
  post
};
