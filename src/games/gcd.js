import getRandomNumber from '../randomNumber.js';
import { launchGameLogic, roundsCount } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const calcGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return calcGcd(num2, num1 % num2);
};

const makeRound = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = calcGcd(firstNumber, secondNumber);
  return [question, correctAnswer];
};

const startGameGcd = () => {
  const rounds = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    rounds.push(makeRound());
  }
  launchGameLogic(gameDescription, rounds);
};

export default startGameGcd;
