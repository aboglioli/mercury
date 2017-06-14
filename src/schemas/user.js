const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true},
  password: {type: String, required: true},
  scope: [String],
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('User', userSchema);
