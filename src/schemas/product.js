const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('Product', productSchema);
