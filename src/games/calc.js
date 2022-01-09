import getRandomNumber from '../randomNumber.js';
import { launchGameLogic, roundsCount } from '../index.js';

const gameDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const randomOperation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
};

const makeRound = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const randomOperator = operators[getRandomNumber(0, operators.length)];
  const question = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = String(randomOperation(firstNumber, secondNumber, randomOperator));
  return [question, correctAnswer];
};

const startGameCalc = () => {
  const rounds = [];
  for (let i = 0; i <= roundsCount; i += 1) {
    rounds.push(makeRound());
  }
  launchGameLogic(gameDescription, rounds);
};

export default startGameCalc;
