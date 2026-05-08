import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customer: {
    fullName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    pincode: String
  },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      size: String,
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  status: { type: String, default: 'Pending' }, // Pending, Confirmed, Shipped, Delivered
  paymentMethod: { type: String, default: 'COD' },
  createdAt: { type: Date, default: Date.now }
});

// YEH LINE SABSE ZAROORI HAI (Isi ki wajah se error tha)
export default mongoose.model('Order', orderSchema);