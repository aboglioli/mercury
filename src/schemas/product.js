const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  enabled: {type: Boolean, default: true},
  sku: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String, required: true},
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  price: [{
    currency: String,
    vat: Number,
    wholesale: Number,
    retail: Number,
    updated_at: {type: Date, default: Date.now}
  }],
  images: [String],
  stock: Number,
  collections: [{type: mongoose.Schema.Types.ObjectId, ref: 'Collection'}],
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Product', productSchema);
