import mongoose, { Schema, Document } from 'mongoose';
const categorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    image: { type: String } // Optional: Category banner ke liye
}, { timestamps: true });
export default mongoose.model('Category', categorySchema);
//# sourceMappingURL=Category.js.map