const getRandomPhrase = (phrasesArray) => {
  const indexRandom = Math.floor(Math.random() * phrasesArray.length);
  return phrasesArray[indexRandom];
};

export default getRandomPhrase;
