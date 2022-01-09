import getRandomNumber from '../randomNumber.js';
import { launchGameLogic, roundsCount } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const arithmeticProgressionLength = 10;

const createProgression = (number, difference) => {
  const progression = [];
  for (let i = 0; i < arithmeticProgressionLength; i += 1) {
    progression.push(number + (i * difference));
  }
  return progression;
};

const makeRound = () => {
  const startNumber = getRandomNumber();
  const hiddenIndex = getRandomNumber(0, 10);
  const difference = getRandomNumber(0, 10);
  const progression = createProgression(startNumber, difference);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startGameProgression = () => {
  const rounds = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    rounds.push(makeRound());
  }
  launchGameLogic(gameDescription, rounds);
};

export default startGameProgression;
