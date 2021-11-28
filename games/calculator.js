import giveRandomNumber from '../src/randomNumber.js';
import gameTemplate from '../src/index.js';

const gameRules = 'What is the result of the expression?';

const randomMathOperation = () => {
  const numberOperations = 3;
  const operationsArr = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * numberOperations);
  return operationsArr[randomIndex];
};

const giveData = () => {
  const randomNumber1 = giveRandomNumber();
  const randomNumber2 = giveRandomNumber();
  const question = `${randomNumber1} ${randomMathOperation()} ${randomNumber2}`;
  const correctAnswer = eval(question);
  return [question, correctAnswer];
};

const startGameCalc = () => gameTemplate(gameRules, giveData);

export default startGameCalc;
