import giveRandomNumber from '../randomNumber.js';
import launchGameLogic from '../index.js';

const gameRules = 'What is the result of the expression?';

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

const giveData = () => {
  const firstPart = giveRandomNumber();
  const secondPart = giveRandomNumber();
  const randomOperator = giveRandomNumber(0, 3);
  const question = `${firstPart} ${operators[randomOperator]} ${secondPart}`;
  const correctAnswer = String(randomOperation(firstPart, secondPart, operators[randomOperator]));
  return [question, correctAnswer];
};

const startGameCalc = () => launchGameLogic(gameRules, giveData);

export default startGameCalc;
