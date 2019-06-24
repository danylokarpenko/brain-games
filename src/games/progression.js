import { getRandomInt, run } from '..';

const gameDescription = 'What number is missing in the progression?';
const createProgression = (startNumber, progressionStep, blindIndex) => {
  const arrSize = 10;
  const arr = [];
  let arrToStr = '';
  let correctAnswer = 0;
  let firstElementOfProgression = startNumber;
  for (let i = 0; i < arrSize; i += 1) {
    arr[i] = firstElementOfProgression;
    firstElementOfProgression += progressionStep;
    if (i === blindIndex) {
      correctAnswer = arr[i];
      arrToStr += '.. ';
    } else {
      arrToStr += `${arr[i]} `;
    }
  }
  return [arrToStr, correctAnswer];
};

const brainProgression = () => {
  let firstElement = getRandomInt(0, 100);
  const index = getRandomInt(0, 9);
  const step = getRandomInt(1, 10);
  if (firstElement > 50 && step > 8) firstElement = getRandomInt(0, 50);
  const values = createProgression(firstElement, step, index);

  const question = `${values[0]}`;
  const correctAnswer = values[1];
  return [question, correctAnswer];
};

export default () => run(gameDescription, brainProgression);
