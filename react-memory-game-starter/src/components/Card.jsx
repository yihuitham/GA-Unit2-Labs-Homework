import React, { useState } from "react";

export default function (props) {
  const [flipStatus, setFlipStatus] = useState(false);
  const changeStatus = () => {
    setFlipStatus(!flipStatus);
  };
  return (
    <img
      onClick={changeStatus}
      src={flipStatus ? props.cardImage : props.backgroundImage}
      alt="card"
    />
  );
}
