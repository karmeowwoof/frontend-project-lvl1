import getRandomNumber from '../randomNumber.js';
import { launchGameLogic, roundCount } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const data = [];

const getData = () => {
  for (let i = 0; i <= roundCount; i += 1) {
    const randomNumber = getRandomNumber();
    const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    data.push([randomNumber, correctAnswer]);
  }
  return data;
};

getData(roundCount);

const startGameEven = () => launchGameLogic(gameDescription, data);

export default startGameEven;
