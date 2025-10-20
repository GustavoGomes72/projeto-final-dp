import { useEffect, useState } from "react";
import { getProduct } from "../services/api";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    Promise.all(stored.map((id) => getProduct(id))).then(setCartItems);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h1>Carrinho</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
