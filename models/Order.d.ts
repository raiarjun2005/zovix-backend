import mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    items: mongoose.Types.DocumentArray<{
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }>;
    status: string;
    paymentMethod: string;
    createdAt: NativeDate;
    totalAmount?: number | null;
    customer?: {
        fullName?: string | null;
        email?: string | null;
        phone?: string | null;
        address?: string | null;
        city?: string | null;
        pincode?: string | null;
    } | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    items: mongoose.Types.DocumentArray<{
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }>;
    status: string;
    paymentMethod: string;
    createdAt: NativeDate;
    totalAmount?: number | null;
    customer?: {
        fullName?: string | null;
        email?: string | null;
        phone?: string | null;
        address?: string | null;
        city?: string | null;
        pincode?: string | null;
    } | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    items: mongoose.Types.DocumentArray<{
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }>;
    status: string;
    paymentMethod: string;
    createdAt: NativeDate;
    totalAmount?: number | null;
    customer?: {
        fullName?: string | null;
        email?: string | null;
        phone?: string | null;
        address?: string | null;
        city?: string | null;
        pincode?: string | null;
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    items: mongoose.Types.DocumentArray<{
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }>;
    status: string;
    paymentMethod: string;
    createdAt: NativeDate;
    totalAmount?: number | null;
    customer?: {
        fullName?: string | null;
        email?: string | null;
        phone?: string | null;
        address?: string | null;
        city?: string | null;
        pincode?: string | null;
    } | null;
}, mongoose.Document<unknown, {}, {
    items: mongoose.Types.DocumentArray<{
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }>;
    status: string;
    paymentMethod: string;
    createdAt: NativeDate;
    totalAmount?: number | null;
    customer?: {
        fullName?: string | null;
        email?: string | null;
        phone?: string | null;
        address?: string | null;
        city?: string | null;
        pincode?: string | null;
    } | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    items: mongoose.Types.DocumentArray<{
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }>;
    status: string;
    paymentMethod: string;
    createdAt: NativeDate;
    totalAmount?: number | null;
    customer?: {
        fullName?: string | null;
        email?: string | null;
        phone?: string | null;
        address?: string | null;
        city?: string | null;
        pincode?: string | null;
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    items: mongoose.Types.DocumentArray<{
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }>;
    status: string;
    paymentMethod: string;
    createdAt: NativeDate;
    totalAmount?: number | null;
    customer?: {
        fullName?: string | null;
        email?: string | null;
        phone?: string | null;
        address?: string | null;
        city?: string | null;
        pincode?: string | null;
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    items: mongoose.Types.DocumentArray<{
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.ObjectId, unknown, {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }, {}, {}> & {
        name?: string | null;
        size?: string | null;
        quantity?: number | null;
        price?: number | null;
        productId?: mongoose.Types.ObjectId | null;
    }>;
    status: string;
    paymentMethod: string;
    createdAt: NativeDate;
    totalAmount?: number | null;
    customer?: {
        fullName?: string | null;
        email?: string | null;
        phone?: string | null;
        address?: string | null;
        city?: string | null;
        pincode?: string | null;
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=Order.d.ts.map