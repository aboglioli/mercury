const User = require('./models');

async function get(request, reply) {
  return reply(await User.getAll());
}

async function getById(request, reply) {
  return reply(await User.getById(request.params.userId));
}

async function post(request, reply) {
  const user = await User.create(request.payload);
  return reply({
    message: 'User created'
  }).code(201);
}

module.exports = {
  get,
  getById,
  post
};
