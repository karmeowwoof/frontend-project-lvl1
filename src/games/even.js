import getRandomNumber from '../randomNumber.js';
import { launchGameLogic, roundCount } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeRounds = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGameEven = () => {
  const rounds = [];
  for (let i = 0; i <= roundCount; i += 1) {
    rounds.push(makeRounds());
  }
  launchGameLogic(gameDescription, rounds);
};

export default startGameEven;
