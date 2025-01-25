// Order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cartItems: [Object], // Assuming cartItems is an array of objects
    addressInfo: Object,
    email: String,
    userid: String,
    paymentId: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
