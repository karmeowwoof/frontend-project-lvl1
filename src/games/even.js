import getRandomNumber from '../randomNumber.js';
import { launchGameLogic, roundsCount } from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeRound = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGameEven = () => {
  const rounds = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    rounds.push(makeRound());
  }
  launchGameLogic(gameDescription, rounds);
};

export default startGameEven;
