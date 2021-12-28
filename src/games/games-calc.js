import getRandomNumber from '../randomNumber.js';
import { launchGameLogic, roundCount } from '../index.js';

const gameDescription = 'What is the result of the expression?';

const data = [];

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

const operators = ['+', '-', '*'];

const getData = () => {
  for (let i = 0; i <= roundCount; i += 1) {
    const firstPart = getRandomNumber();
    const secondPart = getRandomNumber();
    const randomOperator = operators[getRandomNumber(0, operators.length)];
    const question = `${firstPart} ${randomOperator} ${secondPart}`;
    const correctAnswer = String(randomOperation(firstPart, secondPart, randomOperator));
    data.push([question, correctAnswer]);
  }
  return data;
};

getData(roundCount);

const startGameCalc = () => launchGameLogic(gameDescription, data);

export default startGameCalc;
