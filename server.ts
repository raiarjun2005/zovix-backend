import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// Load environment variables
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Production CORS Setup (Sirf tere frontend ko allow karega)
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`ZOVIX Backend running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('ZOVIX API is Running... 🚀');
});