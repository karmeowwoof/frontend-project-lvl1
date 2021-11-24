import giveRandomNumber from '../src/randomNumber.js';
import gameTemplate from '../src/index.js';

const gameRules = 'What number is missing in the progression?';

const arithmeticProgressionLength = 11;

const createProgression = (number, difference) => {
    const progression = [];
    for (let i = 1; i < arithmeticProgressionLength; i += 1) {
        progression.push(number + (i * difference));
    };
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
    const hiddenIndex = giveRandomNumber(9);
    const difference = giveRandomNumber(10);
    const progression = createProgression(startNumber, difference);

    const question = replaceElement(progression, hiddenIndex);

    const extractedReplaceElement = startNumber + (difference * hiddenIndex) + difference;

    const correctAnswer = String(extractedReplaceElement);

    return  [question, correctAnswer];
};

const startGameProgression = () => gameTemplate(gameRules, giveData);

export default startGameProgression;