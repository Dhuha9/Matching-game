import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ images }) => {
  const [machedImage, setMachedImage] = useState({
    image: "",
    isMached: false
  });
 // console.log(images.length);
  const handleImageClick = (src) => {
    src === machedImage.image ? console.log("yes") : console.log("no");
    setMachedImage({
      image: src
    });
    console.log("kk", machedImage);
  };
  return images
    ? images.map((image) => (
        <Card image={image.download_url} handleImageClick={handleImageClick} />
      ))
    : null;
};
export default Cards;
