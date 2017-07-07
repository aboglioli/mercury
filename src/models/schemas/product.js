const mongoose = require('mongoose');

const PriceSchema = {
  currency: String,
  vat: Number,
  wholesale: Number,
  retail: Number,
  updated_at: {type: Date, default: Date.now}
};

const productSchema = new mongoose.Schema({
  enabled: {type: Boolean, default: true},
  sku: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String, required: true},
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  price: PriceSchema,
  images: [String],
  stock: Number,
  collections: [{type: mongoose.Schema.Types.ObjectId, ref: 'Collection'}],
  // variations: [{
  //   variation: {type: mongoose.Schema.Types.ObjectId, ref: 'Variation'},
  //   price: PriceSchema
  // }],
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Product', productSchema);
