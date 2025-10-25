// TESTE DA API:

// import { useEffect } from 'react';

// function App() {
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => console.log(data))
//       .catch(err => console.error(err));
//   }, []);

//   return <h1>Testando API Fake Store</h1>;
// }

// export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./components/header";
import About from "./pages/about";


export default function App() {
  const addToCart = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added!");
  }




  return (
    <>
    <BrowserRouter>
    <Header/>
      <div>
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}
