import express from "express";
import { createOrder, getAllOrders, updateOrderStatus } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder);            // Customer checkout pe use karega
router.get("/", getAllOrders);           // Admin dashboard pe use karega
router.put("/:id/status", updateOrderStatus); // Status change karne ke liye

export default router;