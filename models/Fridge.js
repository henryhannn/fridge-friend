const mongoose = require('mongoose');
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
  fridgeContainer: {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    expirationDate: {
      type: Date
    },
    imageUrl: {
      type: String
    }
  }
}, {
  timestamps: true
})