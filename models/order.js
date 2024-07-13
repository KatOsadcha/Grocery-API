const mongoose = require('../db');

const orderSchema = new mongoose.Schema({
    orderNo: { type: Number, required: true },
    orderDate: { type: String, required: true },
    custNo: { type: Number, required: true },
    productCode: { type: Number, required: true },
    productName: { type: String, required: true },
    productQuantity: { type: Number, required: true },
    productPrice: { type: Number, required: true },
    total: { type: Number, required: true },
    modeOfPayment: { type: String, required: true }
  });

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;
