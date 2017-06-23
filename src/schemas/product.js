const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  price: Number,
  created_at: {type: Date, default: Date.now},
  updated_at: Date
});

module.exports = mongoose.model('Product', productSchema);
