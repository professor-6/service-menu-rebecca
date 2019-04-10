const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  itemName: String,
  itemDescription: String,
  itemPrice: String
});

const menuSchema = mongoose.Schema({
  menuId: {
    type: Number,
    unique: true
  },

  Breakfast: [itemSchema],

  Lunch: [itemSchema],

  Dinner: [itemSchema],

  Business: [itemSchema],

  HappyHour: [itemSchema]
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
