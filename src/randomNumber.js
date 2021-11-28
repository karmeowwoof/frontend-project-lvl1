const giveRandomNumber = (multiplier = 100) => {
  const randomNumber = Math.floor(Math.random() * multiplier);
  return randomNumber;
};

export default giveRandomNumber;
