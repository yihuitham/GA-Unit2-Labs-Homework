import React, { useState } from "react";

const re = /^\d+\.\d{2}$/;

function Form(props) {
  const [newProduct, setnewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [isPriceValid, setisPriceValid] = useState(true);

  function handleNameChange(event) {
    setnewProduct({ ...newProduct, name: event.target.value });
  }
  function handlePriceChange(event) {
    setnewProduct({ ...newProduct, price: event.target.value });
  }
  function handleDescriptionChange(event) {
    setnewProduct({ ...newProduct, description: event.target.value });
  }
  function handleSubmit() {
    if (isPriceValid) {
      props.onSubmit(newProduct);
    }
  }

  function checkPrice() {
    const priceToCheck = re.test(newProduct.price);
    setisPriceValid(priceToCheck);
  }

  return (
    <div className="Form">
      <input
        name="name"
        // value={newProduct.name}
        onChange={handleNameChange}
        placeholder="name"
      />
      <input
        name="price"
        // value={newProduct.price}
        type="text"
        onChange={handlePriceChange}
        placeholder="price"
        onBlur={checkPrice}
      />
      {isPriceValid ? "" : <p>Accepts only 2 digit number</p>}
      <input
        name="description"
        // value={newProduct.description}
        type="text"
        onChange={handleDescriptionChange}
        placeholder="description"
      />
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
}

export default Form;
