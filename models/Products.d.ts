import mongoose, { type Document } from 'mongoose';
export interface IProduct extends Document {
    name: string;
    description: string;
    category: mongoose.Types.ObjectId | string;
    mrp: number;
    sellingPrice: number;
    images: {
        url: string;
        altText?: string;
    }[];
    sizes: {
        size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'Free Size';
        stock: number;
        sku: string;
    }[];
    isFeatured: boolean;
}
declare const Product: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct, {}, mongoose.DefaultSchemaOptions> & IProduct & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IProduct>;
export default Product;
//# sourceMappingURL=Products.d.ts.map