import getRandomNumber from '../randomNumber.js';
import { launchGameLogic, roundCount } from '../index.js';

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

const makeRounds = () => {
  const firstPart = getRandomNumber();
  const secondPart = getRandomNumber();
  const randomOperator = operators[getRandomNumber(0, operators.length)];
  const question = `${firstPart} ${randomOperator} ${secondPart}`;
  const correctAnswer = String(randomOperation(firstPart, secondPart, randomOperator));
  return [question, correctAnswer];
};

const startGameCalc = () => {
  const rounds = [];
  for (let i = 0; i <= roundCount; i += 1) {
    rounds.push(makeRounds());
  }
  launchGameLogic(gameDescription, rounds);
};

export default startGameCalc;
