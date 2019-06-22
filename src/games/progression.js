import { getRandomInt } from '..';
import readlineSync from 'readline-sync';

const brainProgression = userName => () => {
  let x = getRandomInt(0, 100);
  const index = getRandomInt(0, 9);
  const step = getRandomInt(1, 10);

  const arrSize = 10;
  const arr = [];
  let arrToStr = '';
  let correctAnswer = 0;

  for (let i = 0; i < arrSize; i += 1) {
    arr[i] = x;
    x += step;
    if (i === index) {
      correctAnswer = arr[i];
      arrToStr += '.. ';
    } else {
      arrToStr += `${arr[i]} `;
    }
  }

  console.log(`Question: ${arrToStr}`);
  const userAnswer = Math.round(readlineSync.question('Your answer: '));

  if (correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    return 0;
  }
  return 1;
};

export default brainProgression;
