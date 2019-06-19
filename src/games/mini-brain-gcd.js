import { getRandomInt } from '..';
import readlineSync from 'readline-sync';

const gcd = (x, y) => {
  let smallest = x;
  let bigest = y;
  if (x > y) {
    smallest = y;
    bigest = x;
  } else if (x < y) {
    smallest = x;
    bigest = y;
  } else return x;

  for (let i = smallest; smallest > 0; i -= 1) {
    if (smallest % i === 0 && bigest % i === 0) return i;
  }
  return 0;
};

const brainGCD = (userName) => {
  return () => {
    const x = getRandomInt(1, 100);
    const y = getRandomInt(1, 100);

    console.log(`Question: ${x} ${y}`);
    const correctAnswer = gcd(x, y);
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

export default brainGCD;
