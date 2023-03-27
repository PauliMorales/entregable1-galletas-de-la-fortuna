import React from "react";
import getRandomPhrase from "../utils/getRandomPhrase";
import phrases from "../utils/phrases.json";

const Button = ({ clickRandom, clickRandomImage }) => {
  const clickChangePhrase = () => {
    clickRandom(getRandomPhrase(phrases));
    clickRandomImage(getRandomPhrase([1, 2, 3, 4]));
  };

  return (
    <div>
      <button className="App__btn" onClick={clickChangePhrase}>
        Probar mi Suerte
      </button>
    </div>
  );
};

export default Button;
