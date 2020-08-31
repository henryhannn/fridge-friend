const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({
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
  }
});

const FoodItem = mongoose.model('FoodItem', FoodItemSchema);
module.exports = FoodItem;