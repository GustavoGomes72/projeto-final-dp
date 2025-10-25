import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import '../styles/cart.css'

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    Promise.all(stored.map((id) => getProduct(id))).then(setCartItems);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  function removeItem(idRemoved) {
    const newCartItems = cartItems.filter(item => item.id !== idRemoved);
    setCartItems(newCartItems);
    const newCartIDs = newCartItems.map(item => item.id);
    localStorage.setItem("cart", JSON.stringify(newCartIDs));
  }




  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img className="cart-image" src={item.image}/>
          <p>{item.title}</p>
          <p>${item.price}</p>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
