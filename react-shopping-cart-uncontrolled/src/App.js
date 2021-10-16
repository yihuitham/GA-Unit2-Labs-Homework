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
  let id = 0;

  // function addToCart(item) {
  //   setCart([...cart, item]);
  // }

  function addToCart(name, price) {
    id++;
    setCart([...cart, { name: name, price: price, id: id }]);
  }

  function removeFromCart(id) {
    const itemsInCart = cart.filter((element, index) => index !== id);
    setCart(itemsInCart);
  }

  function submit(name, price, description) {
    setProducts([
      { name: name, price: price, description: description },
      ...products,
    ]);
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
