const Order = require('../models/order.model');
const MenuItem = require('../models/menuItem.model');

exports.createOrder = async (req, res) => {
    try {
        const { user, menuItems, notes } = req.body;

        let totalPrice = 0;
        for (const entry of menuItems) {
            const item = await MenuItem.findById(entry.item);
            if (!item) return res.status(404).json({ error: 'Menu item not found' });
            totalPrice += item.price * (entry.quantity || 1);
        }

        const newOrder = new Order({ user, menuItems, notes, totalPrice });
        await newOrder.save();

        res.status(201).json(newOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating order' });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user').populate('menuItems.item');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching orders' });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('user').populate('menuItems.item');
        if (!order) return res.status(404).json({ error: 'Order not found' });

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching order' });
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await Order.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: 'Order not found' });

        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ error: 'Error updating order' });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const deleted = await Order.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Order not found' });

        res.status(200).json({ message: 'Order deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting order' });
    }
};
