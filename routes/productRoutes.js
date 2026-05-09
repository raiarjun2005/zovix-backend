import express from 'express';
import { createProduct, getProducts, getProductById } from '../controllers/productController.js';
// 1. Cloudinary wale 'upload' middleware ko import karo
import { upload } from '../config/cloudinary.js';
const router = express.Router();
// 2. POST route mein 'upload.single("image")' ghusa do
// "image" wo naam hai jo hum Frontend ya Postman se bhejenge
router.post('/', upload.single('image'), createProduct);
// Baaki routes ekdum same rahenge, unme koi photo ka chakkar nahi hai
router.get('/', getProducts);
router.get('/:id', getProductById);
export default router;
//# sourceMappingURL=productRoutes.js.map