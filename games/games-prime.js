import giveRandomNumber from '../src/randomNumber.js';
import gameTemplate from '../src/index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0 && number !== i) {
      return false;
    }
  }
  return true;
};

const giveData = () => {
  const question = giveRandomNumber();
  const correctAnswer = isNumberPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGamePrime = () => gameTemplate(gameRules, giveData);

export default startGamePrime;
