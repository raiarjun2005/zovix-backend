import {} from 'express';
import Category from '../models/Category.js';
// 1. Nayi Category banao (Admin ke liye)
export const createCategory = async (req, res) => {
    try {
        const { name, description, image } = req.body;
        // Simple slug logic: "Velvet Sets" -> "velvet-sets"
        const slug = name.toLowerCase().split(' ').join('-');
        const category = await Category.create({ name, slug, description, image });
        res.status(201).json({ success: true, data: category });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
// 2. Saari Categories fetch karo (Frontend dropdown ke liye)
export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ success: true, data: categories });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params; // Ye tabhi chalega jab route mein :id hoga
        await Category.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Uda diya bhai!" });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
//# sourceMappingURL=categoryController.js.map