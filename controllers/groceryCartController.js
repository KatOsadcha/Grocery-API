const Cart = require('../models/cart');

// Get all cart items
exports.getAllCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add item to cart
exports.addItemToCart = async (req, res) => {
  const newItem = new Cart(req.body);
  try {
    const item = await newItem.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a cart
exports.updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Remove item from cart
exports.removeItemFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
