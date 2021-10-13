import React from "react";

function AllTheThings({ products, addToCart }) {
  const productsList = products.map((element, index) => {
    return (
      <li
        key={index}
        onClick={() => {
          addToCart(element.name, element.price);
        }}
      >
        {element.name} - ${element.price}
      </li>
    );
  });

  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>{productsList}</ul>
    </div>
  );
}

export default AllTheThings;
