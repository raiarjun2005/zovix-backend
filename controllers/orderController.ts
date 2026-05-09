import Order from "../models/Order.js";

// 1. Naya Order Create karna (Customer side se call hoga)
export const createOrder = async (req: any, res: any) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json({ success: true, message: "Order placed!", data: newOrder });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// 2. Saare Orders fetch karna (Admin Panel ke liye)
export const getAllOrders = async (req: any, res: any) => {
    try {
        const orders = await Order.find().sort({ orderDate: -1 });
        res.status(200).json({ success: true, data: orders });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// 3. Order Status Update karna (Admin jab ship karega)
export const updateOrderStatus = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).json({ success: true, data: updatedOrder });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};