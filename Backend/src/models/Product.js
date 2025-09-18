// backend/src/models/Product.js
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, enum: ['phone', 'accessory'], required: true },
    price: { type: Number, required: true },
    description: { type: String, default: '' },
    image: { type: String, default: '' }
  },
  { timestamps: true }
);

export default mongoose.model('Product', ProductSchema);
