import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

const checkEven = () => {

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;

while (counter < 3) {
    let randomNumber = Math.round(Math.random() * 1000);
    console.log(`Question: ${randomNumber}`)
    const userAnswer = readlineSync.question('Your answer: ');
if (randomNumber % 2 === 0 && userAnswer === 'yes') {
    counter += 1;
    console.log('Correct!'); 
}
else if (randomNumber % 2 !== 0 && userAnswer === 'no') {
    counter += 1;
    console.log('Correct!');
}
else { 
console.log(`'${userAnswer}' is wrong answer ;(.\nLet's try again, ${userName}!`);
counter = 0; 
return
}
};
console.log(`Congratulations, ${userName}!`);
};

export default checkEven;