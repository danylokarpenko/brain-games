import { getRandomInt } from '..';
import readlineSync from 'readline-sync';

const isPrime = (num) => {
  const half = num / 2;
  for (let i = 2; i <= half; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = userName => () => {
  const questionValue = getRandomInt(-10, 200);
  console.log(`Question: ${questionValue}`);

  const correctAnswer = isPrime(questionValue) ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    return 0;
  }
  return 1;
};

export default brainPrime;
