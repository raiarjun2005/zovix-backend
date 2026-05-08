import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
    name: string;
    slug: string; // e.g., 'velvet-sets'
    description?: string;
    image?: string;
}

const categorySchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    image: { type: String } // Optional: Category banner ke liye
}, { timestamps: true });

export default mongoose.model<ICategory>('Category', categorySchema);