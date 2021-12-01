import giveRandomNumber from '../randomNumber.js';
import launchGameLogic from '../index.js';

const gameRules = 'What is the result of the expression?';

const randomMathOperation = (num1, num2, operator) => {
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
  const randNum1 = giveRandomNumber();
  const randNum2 = giveRandomNumber();
  const randomOperator = giveRandomNumber(3);
  const question = `${randNum1} ${operators[randomOperator]} ${randNum2}`;
  const correctAnswer = String(randomMathOperation(randNum1, randNum2, operators[randomOperator]));
  return [question, correctAnswer];
};

const startGameCalc = () => launchGameLogic(gameRules, giveData);

export default startGameCalc;
