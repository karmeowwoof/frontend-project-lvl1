import giveRandomNumber from '../src/randomNumber.js';
import gameTemplate from '../src/index.js';

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
  const randomNumber1 = giveRandomNumber();
  const randomNumber2 = giveRandomNumber();
  const randomOperator = giveRandomNumber(3);
  const question = `${randomNumber1} ${operators[randomOperator]} ${randomNumber2}`;
  const correctAnswer = String(randomMathOperation(randomNumber1, randomNumber2, operators[randomOperator]));
  return [question, correctAnswer];
};

const startGameCalc = () => gameTemplate(gameRules, giveData);

export default startGameCalc;
