import run from '..';
import getRandomInt from '../utils';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (startElement, length, progressionStep) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = startElement + progressionStep * i;
  }
  return progression;
};

const makeQuestion = (progression, length, missingElementIndex) => {
  let question = '';
  const missingSpace = '..';
  for (let i = 0; i < length; i += 1) {
    question = `${question}${missingElementIndex !== i ? progression[i] : missingSpace} `;
  }
  return question;
};

const generateRoundData = () => {
  const firstElement = getRandomInt(0, 100);
  const missingElementIndex = getRandomInt(0, progressionLength - 1);
  const step = getRandomInt(1, 10);
  const progression = makeProgression(firstElement, progressionLength, step);
  const question = makeQuestion(progression, progressionLength, missingElementIndex);
  const correctAnswer = String(firstElement + step * missingElementIndex);
  return [question, correctAnswer];
};

export default () => run(gameDescription, generateRoundData);
