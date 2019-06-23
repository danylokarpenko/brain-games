import { getRandomInt, run } from '..';

const rules = 'What number is missing in the progression?';
const createProgression = (startNumber, progressionStep, blindIndex) => {
  const arrSize = 10;
  const arr = [];
  let arrToStr = '';
  let correctAnswer = 0;
  let x = startNumber;
  for (let i = 0; i < arrSize; i += 1) {
    arr[i] = x;
    x += progressionStep;
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
  let x = getRandomInt(0, 100);
  const index = getRandomInt(0, 9);
  const step = getRandomInt(1, 10);
  if (x > 50 && step > 8) x = getRandomInt(0, 50);
  const valuesArray = createProgression(x, step, index);

  const question = `${valuesArray[0]}`;
  const correctAnswer = valuesArray[1];
  return [question, correctAnswer];
};

export default () => run(rules, brainProgression);
