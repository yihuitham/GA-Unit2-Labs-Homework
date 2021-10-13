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
  let id;

  function addToCart(name, price) {
    id = Math.floor(Math.random()*10000);
    setCart([...cart, { id: id, name: name, price: price }]);
    console.log(id);
    
  }
  // create an addToCart function that takes in a product as a param
  // using the ...spread operator add the product to the cart array
  function removeFromCart(id) {
    const itemsInCart=cart.filter((element)=>element.id !==id);
    setCart(itemsInCart)
  }
  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form />
      <div className="products">
        <AllTheThings products={products} addToCart={addToCart} />
        <MyShoppingCart cart={cart} removeFromCart={removeFromCart}/>
      </div>
    </div>
  );
}
