import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();
// 1. Cloudinary ka connection setup
// Updated Config Section
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // ! ka matlab: "Trust me, ye undefined nahi hoga"
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
// 2. Storage ki setting (Zovix ke kapdon ke liye folder)
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        // @ts-ignore
        folder: 'zovix-products', // Cloudinary pe iss naam ka folder ban jayega
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'], // Sirf achhi quality ki photos
        transformation: [{ width: 1000, height: 1000, crop: 'limit' }], // Auto resize (taaki site fast chale)
    },
});
const upload = multer({ storage: storage });
export { cloudinary, upload };
//# sourceMappingURL=cloudinary.js.map