import giveRandomNumber from '../randomNumber.js';
import launchGameLogic from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const giveData = () => {
  const randomNumber = giveRandomNumber();
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGameEven = () => launchGameLogic(gameRules, giveData);

export default startGameEven;
