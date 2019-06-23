import { getRandomInt, run } from '..';

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

const rules = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => {
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);

  const question = `${x} ${y}`;
  const correctAnswer = gcd(x, y);
  return [question, correctAnswer];
};

export default () => run(rules, brainGCD);
