const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateShoppingListItem(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.imageUrl = validText(data.imageUrl) ? data.imageUrl : '';

  if (Validator.isEmpty(data.name)) {
    errors.email = 'Name is required';
  }
  // dairy, vegetables, fruits, grains, protein, party, drinks, leftovers, others, can edit this list
  if (!Validator.isIn(data.category, [
    'dairy',
    'vegetable',
    'fruit',
    'grains',
    'protein',
    'dessert',
    'comdiment',
    'party',
    'drink',
    'leftovers',
    'eggs',
    'other'
  ])) {
    errors.category = 'Category not approved';
  }

  if (Validator.isEmpty(data.imageUrl)) {
    errors.imageUrl = 'Image Url is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}