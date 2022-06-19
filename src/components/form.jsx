import React, {useState} from "react";
import MemeData from "./Memedata";

export default function Form() {
  //let url;
  const [memeImage, setMemeImage] = useState("")
  function getMemeImage() {
    const memesArray = MemeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
    //console.log(randomNumber);
    //url = memesArray[randomNumber].url;
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top Text" className="form-input" />
        <input type="text" placeholder="Bottom Text" className="form-input" />
        <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
      </div>
      <img src= {memeImage} className="meme-image" />
    </main>
  );
}
