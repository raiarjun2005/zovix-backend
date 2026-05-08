import { type Request, type Response } from 'express';
import mongoose from 'mongoose';
import Product from '../models/Products.js';

// 1. Naya Product banana (Admin ke liye)
export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json({ 
            success: true, 
            message: 'ZOVIX ka naya product successfully add ho gaya!', 
            data: savedProduct 
        });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 2. Saare Products laana (Homepage ke liye)
export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, count: products.length, data: products });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 3. Specific ID se Product dhoondhna (Product Detail Page ke liye)
export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // TypeScript aur Mongoose validation fix
    if (typeof id !== 'string' || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, message: "Invalid Product ID format" });
    }

    const product = await Product.findById(id);
    
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found in database" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error: any) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};