import React, { useState, useEffect } from "react";
import "./styles.css";
import Cards from "./components/Cards";

export default function App() {
  const [Data, setData] = useState();
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list`)
      .then((response) => response.json())
      .then((images) => {setData(images)
    console.log(images)})
    .catch(()=>console.log('error fetch'))
    console.log(Data);
  },[]);
  console.log("Hi");
  return (
    <div className="App">
      <Cards images={Data}/>
    </div>
  );
}
