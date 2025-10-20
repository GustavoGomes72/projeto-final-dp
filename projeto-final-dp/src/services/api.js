const BASE = "https://fakestoreapi.com";

async function getProducts() {
  const res = await fetch(`${BASE}/products`);
  return res.json();
}

async function getProduct(id) {
  const res = await fetch(`${BASE}/products/${id}`);
  return res.json();
}
