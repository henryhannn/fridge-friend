const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ShoppingListItemSchema = require('./ShoppingListItem');

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  shoppingList: [ShoppingListItemSchema]
}, {
  timestamps: true
});

const User = mongoose.model('User', UserSchema);
module.exports = User;