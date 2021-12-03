import giveRandomNumber from '../randomNumber.js';
import launchGameLogic from '../index.js';

const gameRules = 'What number is missing in the progression?';

const arithmeticProgressionLength = 11;

const createProgression = (number, difference) => {
  const progression = [];
  for (let i = 1; i < arithmeticProgressionLength; i += 1) {
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

const giveData = () => {
  const startNumber = giveRandomNumber();
  const hiddenIndex = giveRandomNumber(0, 9);
  const difference = giveRandomNumber(0, 10);
  const progression = createProgression(startNumber, difference);
  const question = replaceElement(progression, hiddenIndex);
  const extractedReplaceElement = startNumber + (difference * hiddenIndex) + difference;
  const correctAnswer = String(extractedReplaceElement);
  return [question, correctAnswer];
};

const startGameProgression = () => launchGameLogic(gameRules, giveData);

export default startGameProgression;
