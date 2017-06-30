const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: String,
  parentId: String
});

module.exports = mongoose.model('Collection', collectionSchema);
