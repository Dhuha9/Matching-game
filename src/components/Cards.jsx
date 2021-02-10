import React from "react";
import Card from "./Card";

const Cards = ({ images }) => {
  return images
    ? images.map((image) => (
        <Card image={image.download_url}/>
        
  
      ))
    : null;
};
export default Cards;
