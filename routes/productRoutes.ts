import express from 'express';
// Apna naya getProductById function import karna mat bhoolna
import { createProduct, getProducts, getProductById } from '../controllers/productController.js'; // .js lagana zaroori hai

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);

// YEH NAYA RASTA HAI: Specific ID ke liye
router.get('/:id', getProductById); 

export default router;