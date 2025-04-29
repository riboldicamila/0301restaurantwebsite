const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  allergens: [String],
  category: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);
