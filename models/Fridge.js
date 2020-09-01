const mongoose = require('mongoose');
const FridgeItemSchema = require('./FridgeItem');
const Schema = mongoose.Schema;

const FridgeSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  participants: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'users' 
  }],
  fridgeContainer: [
    FridgeItemSchema
  ]
}, {
  timestamps: true
})

const Fridge = mongoose.model('Fridge', FridgeSchema);
module.exports = Fridge;