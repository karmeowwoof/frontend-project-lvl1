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

const startGameCalc = () => gameTemplate(gameRules, giveData);

export default startGameCalc;
