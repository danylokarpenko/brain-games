import { getRandomInt } from '..';
import readlineSync from 'readline-sync';

const sum = (a, b, toStr = true) => {
  return toStr === true ? a + b : `${a} + ${b}`;
};
const sub = (a, b, toStr = true) => {
  return toStr === true ? a - b : `${a} - ${b}`;
};
const mul = (a, b, toStr = true) => {
  return toStr === true ? a * b : `${a} * ${b}`;
};

const operation = [3];
operation[0] = sum;
operation[1] = sub;
operation[2] = mul;

const brainCalc = (userName) => {
  return () => {
    const x = getRandomInt(-100, 100);
    const y = getRandomInt(-100, 100);
    const index = getRandomInt(0, 2);

    console.log(`Question: ${operation[index](x, y, 'toStr')} `);
    const correctAnswer = operation[index](x, y);
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

export default brainCalc;
