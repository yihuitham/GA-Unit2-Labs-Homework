// IMPORT useEffect
import React from "react";

const ColoredDiv = (props) => {
  

  let styles = {
    background: props.color,
   // add conditional logic here
   flex: props.width>1023? "1":"0"
  }
  
  return (
    <>
      <div 
        style={styles}
        className="colored-div"
        >
        {props.color}
        <button>Remove</button>
      </div>
    </>
  );
}

export default ColoredDiv