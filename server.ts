import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

// Load environment variables
dotenv.config();

// Connect Database
connectDB();

const app = express();

// 1. BULLETPROOF CORS FIX (Port 3000, 3001 aur Website sab allow)
const allowedOrigins = [
  'http://localhost:3000', 
  'http://localhost:3001', 
  'https://zovixindia.com', 
  'https://www.zovixindia.com'
];

app.use(cors({
  origin: function (origin, callback) {
    // Agar request Postman se aayi (jiska origin nahi hota) ya hamari list mein se hai
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS Blocked: Ye origin allowed nahi hai!'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  credentials: true
}));

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. JASOOS MIDDLEWARE (Terminal mein batayega kaunsi link hit hui)
app.use((req, res, next) => {
    console.log(`[${req.method}] Request aayi hai yahan -> ${req.url}`);
    next();
});

// API Routes
app.use('/api/categories', categoryRoutes); 
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('ZOVIX API is Running... 🚀');
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`ZOVIX Backend running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});