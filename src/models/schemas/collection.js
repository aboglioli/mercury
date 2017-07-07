const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: String,
  parent: {type: mongoose.Schema.Types.ObjectId, ref: 'Collection'}
});

module.exports = mongoose.model('Collection', collectionSchema);
