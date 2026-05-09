import {} from 'express';
import mongoose from 'mongoose';
import Product from '../models/Products.js';
// 1. Naya Product banana
export const createProduct = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Bhai, product ki photo toh daalo!" });
        }
        const imageUrl = req.file.path;
        const newProduct = new Product({
            ...req.body,
            images: [{ url: imageUrl, altText: req.body.name || "Zovix Premium Product" }]
        });
        await newProduct.save();
        return res.status(201).json({ success: true, data: newProduct });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};
// 2. Saare Products laana (Populate Added ✅)
export const getProducts = async (req, res) => {
    try {
        // .populate('category', 'name slug') ka matlab: 
        // Category ki sirf 'name' aur 'slug' fields uthao, poora kachra nahi.
        const products = await Product.find({}).populate('category', 'name slug');
        return res.status(200).json({ success: true, count: products.length, data: products });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};
// 3. Specific ID se Product dhoondhna (Populate Added ✅)
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        if (typeof id !== 'string' || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: "Invalid Product ID format" });
        }
        // Yahan bhi populate lagaya hai taaki Single Product page pe category dikhe
        const product = await Product.findById(id).populate('category', 'name slug');
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        return res.status(200).json({ success: true, data: product });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
};
//# sourceMappingURL=productController.js.map