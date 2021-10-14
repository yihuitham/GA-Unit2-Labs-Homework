import React from "react";

function MyShoppingCart({ cart, removeFromCart }) {
  const cartList = cart.map((element, index) => {
    return (
      <li
        key={index}
        onClick={() => {
          removeFromCart(index);
        }}
      >
        {element.name} - ${element.price}
      </li>
    );
  });
  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>{cartList}</ul>
    </div>
  );
}

export default MyShoppingCart;
