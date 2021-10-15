import React, { useRef } from "react";

function Form(props) {
  const inputName = useRef();
  const inputPrice = useRef();
  const inputDescription = useRef();

  function handleSubmit() {
    props.onSubmit(
      inputName.current.value,
      inputPrice.current.value,
      inputDescription.current.value
    );
  }

  return (
    <div className="Form">
      <input
        name="name"
        type="text"
        ref={inputName}
        placeholder="product name"
      />
      <input name="price" type="text" ref={inputPrice} placeholder="price" />
      <input
        name="description"
        type="text"
        ref={inputDescription}
        placeholder="description"
      />
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
}

export default Form;
