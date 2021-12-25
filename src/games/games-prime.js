import getRandomNumber from '../randomNumber.js';
import launchGameLogic from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  const question = getRandomNumber();
  const correctAnswer = isNumberPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGamePrime = () => launchGameLogic(gameRule, getData);

export default startGamePrime;
