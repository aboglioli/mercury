const mongoose = require('mongoose');

const configurationSchema = new mongoose.Schema({
  language: {
    label: String,
    value: String
  },
  currencies: [{
    label: String,
    value: String
  }],
  genders: [{
    label: String,
    value: String
  }]
});

module.exports = mongoose.model('Configuration', configurationSchema);
