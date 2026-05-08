import mongoose, { type Document, Schema } from 'mongoose';

// 1. Modern Rulebook (TypeScript Interface)
// Yeh batayega ki ZOVIX ke har product mein kya-kya hona zaroori hai
export interface IProduct extends Document {
    name: string;
    description: string;
    // Yahan string union hata ke 'ObjectId' use karenge
    category: mongoose.Types.ObjectId | string; 
    mrp: number;
    sellingPrice: number;
    images: { url: string; altText?: string }[];
    sizes: { size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'; stock: number; sku: string }[];
    isFeatured: boolean;
}
// 2. Mongoose Schema (Database ka structure)
const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { 
        type: Schema.Types.ObjectId, 
        ref: 'Category', // Yeh wahi naam hai jo humne Category model mein rakha tha
        required: true 
    },
    mrp: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    images: [
        {
            url: { type: String, required: true },
            altText: { type: String }
        }
    ],
    sizes: [
        {
            size: { type: String, enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], required: true },
            stock: { type: Number, required: true, default: 0 },
            sku: { type: String, required: true }
        }
    ],
    isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

// 3. Modern ES Module Export
const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;