// database/init/init.js
db = db.getSiblingDB('mobileshop');

db.createCollection('products');

db.products.insertMany([
  {
    name: "Pixel Pro X",
    category: "phone",
    price: 79999,
    description: "Flagship camera, silky 120Hz AMOLED, clean Android.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200"
  },
  {
    name: "Galaxy Neo 5G",
    category: "phone",
    price: 34999,
    description: "All-day battery, vibrant display, smooth performance.",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200"
  },
  {
    name: "iPhone Aurora",
    category: "phone",
    price: 109999,
    description: "A17-class chip, ProMotion, premium build.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200"
  },
  {
    name: "MagCharge 30W",
    category: "accessory",
    price: 2999,
    description: "Magnetic fast charger. Cool and compact.",
    image: "https://images.unsplash.com/photo-1618180948264-8e6aae4859a6?q=80&w=1200"
  },
  {
    name: "Crystal Shield Case",
    category: "accessory",
    price: 1299,
    description: "Shock-absorbent transparent case with grippy edges.",
    image: "https://images.unsplash.com/photo-1606170033648-8f57c87cd703?q=80&w=1200"
  },
  {
    name: "Bass+ Wireless Buds",
    category: "accessory",
    price: 4499,
    description: "Deep bass, low-latency gaming mode, 30h case.",
    image: "https://images.unsplash.com/photo-1518444054321-0f3c7e9d5b98?q=80&w=1200"
  }
]);
