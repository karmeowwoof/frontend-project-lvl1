import readlineSync from 'readline-sync';

const roundCount = 3;

const launchGameLogic = (gameRules, giveData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ,${userName}!`);
  console.log(gameRules);
  for (let i = 1; i <= roundCount; i += 1) {
    const [gameQuestion, correctAnswer] = giveData();
    console.log(`Question: ${gameQuestion}`);
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

export default launchGameLogic;
