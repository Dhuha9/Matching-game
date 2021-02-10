import React, { useState } from "react";
import '../style.scss'
const Card = ({image}) => {
  const [flipping, setFlipping] = useState({ flipped: false, clicked: false });

  const flip = () => {
    setFlipping({ flipped: !flipping.flipped, clicked: true });
  };

  var flippedCSS = flipping.flipped ? " Card-Back-Flip" : " Card-Front-Flip";
  if (!flipping.clicked) flippedCSS = "";
  return (
    <div className="Card" onClick={flip}>
      <div className={"Card-Front" + flippedCSS}>
        <h3>Click Me</h3>
      </div>
      <div className={"Card-Back" + flippedCSS}>  <img src={image} alt="" /></div>
    </div>
  );
};
export default Card;
