const giveRandomNumber = (multiplier = 100) => {
  const randomNumber = Math.round(Math.random() * multiplier);
  return randomNumber;
};

export default giveRandomNumber;
