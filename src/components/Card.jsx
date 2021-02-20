import React, { useState } from "react";
import "../style.scss";
const Card = ({ image, id, indx, handleImageClick }) => {
  const [flipping, setFlipping] = useState({ flipped: false, clicked: false });

  const flip = () => {
    handleImageClick(id, indx);
    setFlipping({ flipped: !flipping.flipped, clicked: true });
  };

  var flippedCSS = flipping.flipped ? " Card-Back-Flip" : " Card-Front-Flip";
  if (!flipping.clicked) flippedCSS = "";
  return (
    <div className="Card" onClick={flip} key={indx}>
      <div className={"Card-Front" + flippedCSS}>
        <h3>Click Me</h3>
      </div>
      <div className={"Card-Back" + flippedCSS}>
        {" "}
        <img src={image} alt="" />
      </div>
    </div>
  );
};
export default Card;
