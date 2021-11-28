import giveRandomNumber from '../src/randomNumber.js';
import gameTemplate from '../src/index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const calcGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return calcGcd(num2, num1 % num2);
};

const giveData = () => {
  const firstNumber = giveRandomNumber();
  const secondNumber = giveRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = calcGcd(firstNumber, secondNumber);
  return [question, correctAnswer];
};

const startGameGcd = () => gameTemplate(gameRules, giveData);

export default startGameGcd;
