// import useState
import React, { useState } from "react";
import "./styles.css";
import AllTheThings from "./components/AllTheThings";
import MyShoppingCart from "./components/MyShoppingCart";
import Form from "./components/Form";
import productsArr from "./products";

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
  }
  function removeFromCart(id) {
    const itemsInCart = cart.filter((element, index) => index !== id);
    setCart(itemsInCart);
  }

  function submit(newProduct) {
    setProducts([newProduct, ...products]);
  }

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form onSubmit={submit} />
      <div className="products">
        <AllTheThings products={products} addToCart={addToCart} />
        <MyShoppingCart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}
