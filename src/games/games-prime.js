import getRandomNumber from '../randomNumber.js';
import { launchGameLogic, roundCount } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const data = [];

const isNumberPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0 && number !== i) {
      return false;
    }
  }
  return true;
};

const getData = () => {
  for (let i = 0; i <= roundCount; i += 1) {
    const question = getRandomNumber();
    const correctAnswer = isNumberPrime(question) ? 'yes' : 'no';
    data.push([question, correctAnswer]);
  }
  return data;
};

getData(roundCount);

const startGamePrime = () => launchGameLogic(gameDescription, data);

export default startGamePrime;
