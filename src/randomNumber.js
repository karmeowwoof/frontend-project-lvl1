const getRandomNumber = (min = 0, max = 100) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

export default getRandomNumber;
