require('dotenv').config();

require('./src/core/db');
module.exports = require('./src/server');
