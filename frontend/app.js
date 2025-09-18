// frontend/app.js
const grid = document.getElementById('productGrid');
const cartCount = document.getElementById('cartCount');
const filterButtons = document.querySelectorAll('[data-filter]');
let allProducts = [];
let cart = [];

const loadProducts = async () => {
  try {
    const res = await fetch('/api/products');
    const data = await res.json();
    allProducts = data;
    renderProducts(allProducts);
  } catch (e) {
    grid.innerHTML = `<div class="col-12 text-center text-white-50">Failed to load products.</div>`;
  }
};

const formatCurrency = (v) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(v);

const renderProducts = (list) => {
  grid.innerHTML = '';
  list.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-4';
    col.innerHTML = `
      <div class="card card-gradient h-100 shadow-sm">
        <img src="${p.image}" class="card-img-top" alt="${p.name}" style="object-fit:cover;height:240px;">
        <div class="card-body d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h5 class="card-title">${p.name}</h5>
            <span class="price-chip">${formatCurrency(p.price)}</span>
          </div>
          <p class="card-text small opacity-75 mb-3">${p.description}</p>
          <div class="mt-auto d-flex gap-2">
            <button class="btn btn-add w-100" onclick='addToCart(${JSON.stringify(p._id)})'>
              <i class="fa-solid fa-cart-plus me-2"></i>Add to cart
            </button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
};

const addToCart = (id) => {
  const item = allProducts.find(p => p._id === id);
  if (!item) return;
  cart.push(item);
  cartCount.textContent = cart.length.toString();
};

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const f = btn.getAttribute('data-filter');
    if (f === 'all') renderProducts(allProducts);
    else renderProducts(allProducts.filter(p => p.category === f));
  });
});

loadProducts();
