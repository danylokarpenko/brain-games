import { getRandomInt } from '..';
import readlineSync from 'readline-sync';

const brainProgression = (userName) => {
  return () => {
    let x = getRandomInt(0, 100);
    const index = getRandomInt(0, 9);
    const step = getRandomInt(1, 10);

    const arrSize = 10;
    const arr = [];
    let add = 0;
    let arrStr = '';
    let correctAnswer = 0;

    for (let i = 0; i < arrSize; i += 1) {
      x += add;
      arr[i] = x;
      add = step;

      if (i === index) {
        correctAnswer = arr[i];
        arrStr += '.. ';
      } else {
        arrStr += `${arr[i]} `;
      }
    }

    console.log(`Question: ${arrStr}`);
    const userAnswer = Math.round(readlineSync.question('Your answer: '));

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return 0;
    }
    return 1;
  };
};

export default brainProgression;
