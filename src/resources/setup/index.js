const SetupHandler = require('./handlers');

module.exports = [
  {
    path: '',
    method: 'GET',
    config: {
      handler: {
        async: SetupHandler.get
      },
      description: 'Setup',
      tags: ['api', 'setup']
    }
  }
];
