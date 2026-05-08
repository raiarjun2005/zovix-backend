import { type Request, type Response } from 'express';
import mongoose from 'mongoose';
import Product from '../models/Products.js';

// Custom Interface: TypeScript ko batane ke liye ki 'file' property exist karti hai
interface MulterRequest extends Request {
  file?: any;
}

// 1. Naya Product banana (Admin ke liye)
export const createProduct = async (req: MulterRequest, res: Response) => {
  console.log("FRONTEND SE TEXT AAYA:", req.body);
console.log("FRONTEND SE PHOTO AAYI:", req.file ? "Haan" : "Nahi");
  try {
    // 1. Check karo ki photo aayi hai ya nahi
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Bhai, product ki photo toh daalo!" });
    }

    // 2. req.file.path mein Cloudinary ka naya URL hoga
    const imageUrl = req.file.path; 

    // 3. Database mein naya product save karo
    const newProduct = new Product({
      ...req.body,
      // Cloudinary ka asli link aur SEO friendly alt text yahan gaya
      images: [{ url: imageUrl, altText: req.body.name || "Zovix Premium Product" }] 
    });

    await newProduct.save();
    return res.status(201).json({ success: true, data: newProduct });

  } catch (error: any) {
    return res.status(500).json({ success: false, message: "Server error, check logs", error: error.message });
  }
};

// 2. Saare Products laana (Homepage ke liye)
export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({ success: true, count: products.length, data: products });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
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

    return res.status(200).json({ success: true, data: product });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};