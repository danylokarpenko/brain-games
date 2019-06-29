import run from '..';
import getRandomInt from '../utils';

const gameDescription = 'What number is missing in the progression?';

const progressionSize = 10;

const makeQuestion = (startNumber, progressionStep, missingNumberIndex) => {
  let question = '';
  const missingSpace = '..';
  for (let i = 0; i < progressionSize; i += 1) question = `${question}${missingNumberIndex !== i ? startNumber + progressionStep * i : missingSpace} `;
  return question;
};

const generateRoundData = () => {
  const firstElement = getRandomInt(0, 100);
  const missingNumberIndex = getRandomInt(0, progressionSize - 1);
  const step = getRandomInt(1, 10);
  const question = makeQuestion(firstElement, step, missingNumberIndex);
  const correctAnswer = String(firstElement + step * missingNumberIndex);
  return [question, correctAnswer];
};

export default () => run(gameDescription, generateRoundData);
