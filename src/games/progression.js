import run from '..';
import getRandomInt from '../utils';

const gameDescription = 'What number is missing in the progression?';


const makeQuestion = (startElement, progressionStep, missingElementIndex) => {
  const progressionLength = 10;
  let question = '';
  const missingSpace = '..';
  for (let i = 0; i < progressionLength; i += 1) {
    question = `${question}${missingElementIndex !== i ? startElement + progressionStep * i : missingSpace} `;
  }
  return question;
};

const generateRoundData = () => {
  const progressionLength = 10;
  const firstElement = getRandomInt(0, 100);
  const missingElementIndex = getRandomInt(0, progressionLength - 1);
  const step = getRandomInt(1, 10);
  const question = makeQuestion(firstElement, step, missingElementIndex);
  const correctAnswer = String(firstElement + step * missingElementIndex);
  return [question, correctAnswer];
};

export default () => run(gameDescription, generateRoundData);
