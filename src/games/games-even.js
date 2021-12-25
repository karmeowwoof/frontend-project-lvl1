import getRandomNumber from '../randomNumber.js';
import launchGameLogic from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getData = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGameEven = () => launchGameLogic(gameRule, getData);

export default startGameEven;
