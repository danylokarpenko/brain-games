import run from '..';
import getRandomInt from '../utils';

const gameDescription = 'What number is missing in the progression?';

const arraySize = 10;
const arrayProgression = [];

const createProgressionData = (startNumber, progressionStep, blindIndex) => {
  let stringProgression = '';
  let correctAnswer = 0;
  for (let i = 0; i < arraySize; i += 1) {
    arrayProgression[i] = startNumber + progressionStep * i;
    if (i === blindIndex) {
      correctAnswer = arrayProgression[i];
      stringProgression += '.. ';
    } else {
      stringProgression += `${arrayProgression[i]} `;
    }
  }
  return [stringProgression, correctAnswer];
};

const generateRoundData = () => {
  const firstElement = getRandomInt(0, 100);
  const hidenIndexOfprogression = getRandomInt(0, 9);
  const step = getRandomInt(1, 10);
  const values = createProgressionData(firstElement, step, hidenIndexOfprogression);

  const question = values[0];
  const correctAnswer = String(values[1]);
  return [question, correctAnswer];
};

export default () => run(gameDescription, generateRoundData);
