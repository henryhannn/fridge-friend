const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FridgeItemSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  quantity: {
    type: Number,
    required: true
  },
  owner: { 
    type: Schema.Types.ObjectId, 
    ref: 'users',
  },
  expirationDate: { 
    type: Date 
  },
  imageUrl: { 
    type: String,
    required: true
  }
})

module.exports = FridgeItemSchema;