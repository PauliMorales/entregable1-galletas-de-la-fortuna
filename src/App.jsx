import "./App.css";
import phrases from "./utils/phrases.json";
import Phrases from "./components/Phrases";
import Button from "./components/Button";
import getRandomPhrase from "./utils/getRandomPhrase";
import { useState } from "react";

const imgs = [1, 2, 3, 4];

function App() {
  const [changePhrase, setChangePhrase] = useState(getRandomPhrase(phrases));

  const [randomImage, setRandomImage] = useState(getRandomPhrase(imgs));

  const appStyle = {
    backgroundImage: `url('/backgrounds/fondo${randomImage}.jpg')`,
  };

  return (
    <div style={appStyle} className="App">
      <h2 className="App__title">GALLETAS DE LA FORTUNA</h2>
      <Phrases print={changePhrase} />
      <Button clickRandom={setChangePhrase} clickRandomImage={setRandomImage} />
    </div>
  );
}

export default App;
