import express from 'express';
import { createCategory, getCategories, deleteCategory } from '../controllers/categoryController.js';
const router = express.Router();
router.post('/', createCategory); // POST /api/categories
router.get('/', getCategories); // GET /api/categories
router.delete('/:id', deleteCategory); // Ab ye URL se ID uthayega
export default router;
//# sourceMappingURL=categoryRoutes.js.map