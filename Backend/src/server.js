// backend/src/server.js
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db.js';
import productRoutes from './routes/products.js';

dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());

const corsOrigin = process.env.CORS_ORIGIN || '*';
app.use(cors({ origin: corsOrigin }));

app.use('/api', productRoutes);

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mobileshop';

connectDB(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`API running on ${PORT}`));
  })
  .catch((err) => {
    console.error('DB connection failed:', err.message);
    process.exit(1);
  });
