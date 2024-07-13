const mongoose = require('../db');

const productSchema = new mongoose.Schema({
  productCode: { type: Number, required: true },
  productName: { type: String, required: true },
  productQuantity: { type: Number, required: true },
  productPrice: { type: Number, required: true }
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;
