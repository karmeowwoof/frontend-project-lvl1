import getRandomNumber from '../randomNumber.js';
import launchGameLogic from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const calcGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return calcGcd(num2, num1 % num2);
};

const getData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = calcGcd(firstNumber, secondNumber);
  return [question, correctAnswer];
};

const startGameGcd = () => launchGameLogic(gameRule, getData);

export default startGameGcd;
