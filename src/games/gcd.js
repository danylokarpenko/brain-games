import { getRandomInt, run } from '..';

const calculateGcd = (x, y) => {
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

const gameDescription = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);

  const question = `${x} ${y}`;
  const correctAnswer = calculateGcd(x, y);
  return [question, correctAnswer];
};

export default () => run(gameDescription, brainGcd);
