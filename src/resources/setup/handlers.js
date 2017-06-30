const { generateHash } = require('../../core/authentication');

const User = require('../users/models');
const Configuration = require('../configuration/models');

async function get(request, reply) {
  await User.removeByEmail('admin@admin.com');

  const user = await User.create({
    name: 'Admin',
    email: 'admin@admin.com',
    password: '123456',
    scope: ['admin']
  });

  const configuration = await Configuration.set({
    language: {
      label: 'Español',
      value: 'es'
    },
    currencies: [{
      label: 'ARS',
      value: 'ars'
    }],
    genders: [{
      label: 'Hombre',
      value: 'man'
    }, {
      label: 'Mujer',
      value: 'woman'
    }]
  });

  reply({user, configuration}).code(201);
}

module.exports = {
  get
};
