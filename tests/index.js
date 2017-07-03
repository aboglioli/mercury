const config = require('../src/config');

config.app.logging = false;
config.database.name = 'mercury-test';

require('../src/core/db');
module.exports = require('../src/server');
