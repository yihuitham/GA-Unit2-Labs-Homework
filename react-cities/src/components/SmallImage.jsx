import React from "react";

export default function SmallImage(props) {
  return (
    <img
      className="thumb"
      src={props.img}
      alt={props.city}
      onClick={props.enlargeImg}
    />
  );
}

// export default function SmallImage(props) {
//   return (
//       <img
//           className="thumb"
//           id={props.city}
//           src={props.img}
//           alt={props.city}
//           onClick={() => props.handleClick(props.img)}
//       />
//   );
// }

// export default function SmallImage(props) {
//   const callback = (event) => {
//       props.onImageClicked(props.img)
//   }

//   const cityToLowerCase = () => {
//       return props.city.toLowerCase();
//   }

//   return (
//       <img
//           className="thumb"
//           id={cityToLowerCase()}
//           src={props.img}
//           alt={props.city}
//           onClick={callback}
//       // onClick={() => props.handleClick(props.img)}
//       />
//   );
// }
