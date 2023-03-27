import React from "react";

const Phrases = ({ print }) => {
  console.log({ print });

  return (
    <p className="App__phrase">
      {print.phrase}
      <br />
      <img className="App__img" src="/backgrounds/comillas.png" alt="" />
    </p>
  );
};

export default Phrases;
