import getRandomNumber from '../randomNumber.js';
import launchGameLogic from '../index.js';

const gameRule = 'What number is missing in the progression?';

const minCount = 0;
const maxCount = 10;

const arithmeticProgressionLength = 10;

const createProgression = (number, difference) => {
  const progression = [];
  for (let i = 0; i < arithmeticProgressionLength; i += 1) {
    progression.push(number + (i * difference));
  }
  return progression;
};

const replaceElement = (progression, hiddenIndex) => {
  const newProgression = progression;
  const newHiddenIndex = hiddenIndex;
  newProgression[newHiddenIndex] = '..';
  return newProgression.join(' ');
};

const getData = () => {
  const startNumber = getRandomNumber();
  const hiddenIndex = getRandomNumber(minCount, maxCount);
  const difference = getRandomNumber(minCount, maxCount);
  const progression = createProgression(startNumber, difference);
  const question = replaceElement(progression, hiddenIndex);
  const extractedReplaceElement = startNumber + (difference * hiddenIndex);
  const correctAnswer = String(extractedReplaceElement);
  return [question, correctAnswer];
};

const startGameProgression = () => launchGameLogic(gameRule, getData);

export default startGameProgression;
