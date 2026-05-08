import express from 'express';
import { createCategory, getCategories } from '../controllers/categoryController.js';

const router = express.Router();

router.post('/', createCategory); // POST /api/categories
router.get('/', getCategories);   // GET /api/categories

export default router;