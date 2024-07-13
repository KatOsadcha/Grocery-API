const mongoose = require("../db");

const cartSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  products: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now },
});
const Cart = mongoose.model("carts", cartSchema);

module.exports = Cart;
