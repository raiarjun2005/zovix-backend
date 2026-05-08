import { type Request, type Response } from 'express';
import Category from '../models/Category.js';

// 1. Nayi Category banao (Admin ke liye)
export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, description, image } = req.body;
        // Simple slug logic: "Velvet Sets" -> "velvet-sets"
        const slug = name.toLowerCase().split(' ').join('-');
        
        const category = await Category.create({ name, slug, description, image });
        res.status(201).json({ success: true, data: category });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 2. Saari Categories fetch karo (Frontend dropdown ke liye)
export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ success: true, data: categories });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message });
    }
};
export const deleteCategory = async (req: Request, res: Response) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Category Deleted" });
    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message });
    }
};