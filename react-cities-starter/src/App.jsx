import React, { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";
import SmallImage from "./components/SmallImage";

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const enlargeImg = (event) => {
    setBigImage(event.target.getAttribute("src"));
  };

  const smallImages = imagesArr.map((element, index) => {
    return (
      <SmallImage
        key={index}
        img={element.img}
        city={element.city}
        enlargeImg={enlargeImg}
      />
    );
  });
  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{smallImages}</div>
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}

// import { useState } from "react";
// import imagesArr from "./imageData";
// import "./App.css";

// function App() {
//   const [bigImage, setBigImage] = useState(imagesArr[0]);

//   const handleClick = (imageUrl) => setBigImage(imageUrl);

//   const images = imagesArr.map((image) => (
//     <img key={image.city} className="thumb" src={image.img} alt={image.city} onClick={() => handleClick(image)} />
//   ));

//   return (
//     <div className="App">
//       <h1>Cities Of The World</h1>
//       <div id="wrapper">
//         <div id="thumbnails">{images}</div>
//         <img id="bigimage" src={bigImage.img} alt={bigImage.city} />
//       </div>
//     </div>
//   );
// }

// export default App;
