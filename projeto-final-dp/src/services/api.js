const BASE = "https://fakestoreapi.com";

export async function getProducts() {
  const res = await fetch(`${BASE}/products`);
  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${BASE}/products/${id}`);
  return res.json();
}

export async function getCategories(cat) {
  const res = await fetch(`${BASE}/categories/${cat}`);
  return res.json();
}

export async function getProductsByCategory(cat) {
  const res = await fetch(`${BASE}/category/${cat}`);
  return res.json();
}
