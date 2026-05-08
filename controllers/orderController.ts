// Fix: 'type' keyword lagana zaroori hai Request aur Response se pehle
import { type Request, type Response } from 'express';
import Order from '../models/Order.js';

export const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const newOrder = new Order(orderData);
    const savedOrder = await newOrder.save();

    res.status(201).json({
      success: true,
      message: "ZOVIX Order Placed Successfully!",
      orderId: savedOrder._id
    });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};