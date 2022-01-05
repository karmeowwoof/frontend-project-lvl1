import getRandomNumber from '../randomNumber.js';
import { launchGameLogic, roundCount } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const minCount = 0;
const maxCount = 10;

// Предыдущий комментарий на эту тему:
// https://github.com/karmeowwoof/frontend-project-lvl1/blob/817f43def25bb4495d702049ca667a6d65667568/src/games/games-progression.js#L25-L26 Тут также магические числа. Потому лучше их заменить.
// Еще возник вопрос по поводу переписывания логики игр: после исправления в каждой игре возникли схожие блоки кода (code climate недоволен). Принцип разделения ответственности соблюдается, но
// принцип DRY - нет.Так и должно быть? 

const arithmeticProgressionLength = 10;

const createProgression = (number, difference) => {
  const progression = [];
  for (let i = 0; i < arithmeticProgressionLength; i += 1) {
    progression.push(number + (i * difference));
  }
  return progression;
};

const makeRounds = () => {
  const startNumber = getRandomNumber();
  const hiddenIndex = getRandomNumber(minCount, maxCount);
  const difference = getRandomNumber(minCount, maxCount);
  const progression = createProgression(startNumber, difference);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  const extractedReplaceElement = startNumber + (difference * hiddenIndex);
  const correctAnswer = String(extractedReplaceElement);
  return [question, correctAnswer];
};

const startGameProgression = () => {
  const rounds = [];
  for (let i = 0; i <= roundCount; i += 1) {
    rounds.push(makeRounds());
  }
  launchGameLogic(gameDescription, rounds);
};

export default startGameProgression;
