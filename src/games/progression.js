import getRandomNumber from '../randomNumber.js';
import { launchGameLogic, roundCount } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const arithmeticProgressionLength = 10;

const createProgression = (number, difference) => {
  const progression = [];
  for (let i = 0; i < arithmeticProgressionLength; i += 1) {
    progression.push(number + (i * difference));
  }
  return progression;
};

const makeRounds = () => {
  const startNumber = getRandomNumber();
  const hiddenIndex = getRandomNumber(0, 10);
  const difference = getRandomNumber(0, 10);
  const progression = createProgression(startNumber, difference);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  const extractedReplaceElement = startNumber + (difference * hiddenIndex);
  const correctAnswer = String(extractedReplaceElement);
  return [question, correctAnswer];
};

const startGameProgression = () => {
  const rounds = [];
  for (let i = 0; i <= roundCount; i += 1) {
    rounds.push(makeRounds());
  }
  launchGameLogic(gameDescription, rounds);
};

export default startGameProgression;
