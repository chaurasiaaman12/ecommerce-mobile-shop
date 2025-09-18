// backend/src/routes/products.js
import { Router } from 'express';
import Product from '../models/Product.js';

const router = Router();

router.get('/products', async (_req, res) => {
  const items = await Product.find({}).sort({ createdAt: -1 }).lean();
  // Normalize _id for frontend JSON.stringify in inline onclick
  const mapped = items.map(x => ({ ...x, _id: String(x._id) }));
  res.json(mapped);
});

router.get('/products/:id', async (req, res) => {
  const item = await Product.findById(req.params.id).lean();
  if (!item) return res.status(404).json({ message: 'Not found' });
  item._id = String(item._id);
  res.json(item);
});

export default router;
