import getRandomNumber from '../randomNumber.js';
import { launchGameLogic, roundCount } from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const makeRounds = () => {
  const question = getRandomNumber();
  const correctAnswer = isNumberPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGamePrime = () => {
  const rounds = [];
  for (let i = 0; i <= roundCount; i += 1) {
    rounds.push(makeRounds());
  }
  launchGameLogic(gameDescription, rounds);
};

export default startGamePrime;
