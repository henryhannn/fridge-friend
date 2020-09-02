const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingListItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  done: {
    type: Boolean,
    required: true
  }
});

module.exports = ShoppingListItemSchema;