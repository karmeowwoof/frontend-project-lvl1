import readlineSync from 'readline-sync';

export const roundCount = 2;

export const launchGameLogic = (gameDescription, data) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ,${userName}!`);
  console.log(gameDescription);
  for (let i = 0; i <= roundCount; i += 1) {
    const question = data[i][0];
    const correctAnswer = data[i][1];
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
