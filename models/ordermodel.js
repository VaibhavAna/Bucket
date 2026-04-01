const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    orderItems: Array,
    totalPrice: Number,
    isPaid: { type: Boolean, default: false },
});

module.exports = mongoose.model("Order", orderSchema);