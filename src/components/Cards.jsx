import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({ images }) => {
  const [machedImage, setMachedImage] = useState({});

  useEffect(() => {
    setMachedImage({
      id: "",
      firstIndex: 0,
      images: images
    });
  }, [images]);

  console.log(machedImage.images);
  const handleImageClick = (id, indx) => {
    id === machedImage.id
      ? setMachedImage((prevState) => {
          prevState.images.splice(indx, 1);
          prevState.images.splice(prevState.firstIndex, 1);
          return {
            id: "",
            firstIndex: 0,
            images: prevState.images
          };
        })
      : setMachedImage((prevState) => {
          console.log("b", prevState);
          prevState.id = id;
          prevState.firstIndex = indx;
          console.log("a", prevState);
          return prevState;
        });

    console.log("kk", machedImage);
  };
  return images
    ? images.map((image, i) => (
        <Card
          indx={i}
          image={image.download_url}
          id={image.id}
          handleImageClick={handleImageClick}
        />
      ))
    : null;
};
export default Cards;
