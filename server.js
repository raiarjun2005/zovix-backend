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
// 1. FIXED CORS: Ab Admin aur Website dono chalenge, aur DELETE bhi allow hoga!
app.use(cors({
    origin: function (origin, callback) {
        return callback(null, true); // Abhi ke liye SABKO allow kar diya taaki glitch theek ho
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // <-- DELETE allow kiya
    credentials: true
}));
// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2. JASOOS MIDDLEWARE (Ye terminal mein batayega kaunsi link hit hui)
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
//# sourceMappingURL=server.js.map