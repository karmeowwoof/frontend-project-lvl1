import readlineSync from 'readline-sync';
import greeting from './cli.js'

export const roundCount = 2;

export const launchGameLogic = (gameDescription, data) => {
  greeting();
  console.log(gameDescription);
  for (let i = 0; i <= roundCount; i += 1) {
    const [question, correctAnswer] = data[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
