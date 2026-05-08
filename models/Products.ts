import mongoose, { type Document, Schema } from 'mongoose';

// 1. Modern Rulebook (TypeScript Interface)
export interface IProduct extends Document {
    name: string;
    description: string;
    category: mongoose.Types.ObjectId | string; 
    mrp: number;
    sellingPrice: number;
    images: { url: string; altText?: string }[];
    // 'Free Size' yahan add kar diya hai
    sizes: { 
        size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'Free Size'; 
        stock: number; 
        sku: string 
    }[];
    isFeatured: boolean;
}

// 2. Mongoose Schema (Database ka structure)
const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { 
        type: Schema.Types.ObjectId, 
        ref: 'Category', 
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
            size: { 
                type: String, 
                // Database mein bhi 'Free Size' ko allow kar diya
                enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Free Size'], 
                required: true 
            },
            stock: { type: Number, required: true, default: 0 },
            sku: { type: String, required: true }
        }
    ],
    isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

// 3. Modern ES Module Export
const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;