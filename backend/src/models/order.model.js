const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    menuItems: [
        {
            item: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
            quantity: { type: Number, default: 1 }
        }
    ],
    status: {
        type: String,
        enum: ['pending', 'preparing', 'completed', 'cancelled'],
        default: 'pending'
    },
    notes: String,
    totalPrice: Number
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
