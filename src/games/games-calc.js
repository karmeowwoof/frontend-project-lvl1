import getRandomNumber from '../randomNumber.js';
import launchGameLogic from '../index.js';

const gameRule = 'What is the result of the expression?';

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
  const firstPart = getRandomNumber();
  const secondPart = getRandomNumber();
  const randomOperator = operators[getRandomNumber(0, operators.length)];
  const question = `${firstPart} ${randomOperator} ${secondPart}`;
  const correctAnswer = String(randomOperation(firstPart, secondPart, randomOperator));
  return [question, correctAnswer];
};

const startGameCalc = () => launchGameLogic(gameRule, getData);

export default startGameCalc;
