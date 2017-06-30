const config = require('../src/config');

config.database.name = 'mercury-test';

require('../src/core/db');
module.exports = require('../src/server');
