import run from '..';
import getRandomInt from '../utils';

const gameDescription = 'What number is missing in the progression?';

const arrSize = 10;
const aProgression = [];

const createProgression = (startNumber, progressionStep, blindIndex) => {
  let sProgression = '';
  let correctAnswer = 0;
  for (let i = 0; i < arrSize; i += 1) {
    aProgression[i] = startNumber + progressionStep * i;
    if (i === blindIndex) {
      correctAnswer = aProgression[i];
      sProgression += '.. ';
    } else {
      sProgression += `${aProgression[i]} `;
    }
  }
  return [sProgression, correctAnswer];
};

const generateBrainProgression = () => {
  let firstElement = getRandomInt(0, 100);
  const index = getRandomInt(0, 9);
  const step = getRandomInt(1, 10);
  if (firstElement > 50 && step > 8) firstElement = getRandomInt(0, 50);
  const values = createProgression(firstElement, step, index);

  const question = values[0];
  const correctAnswer = String(values[1]);
  return [question, correctAnswer];
};

export default () => run(gameDescription, generateBrainProgression);
