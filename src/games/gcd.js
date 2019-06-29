import run from '..';
import getRandomInt from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  if (x === 0) return y;
  if (x < y) return findGcd(y, x);
  return findGcd(x - y, y);
};

const generateRoundData = () => {
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);

  const question = `${x} ${y}`;
  const correctAnswer = String(findGcd(x, y));
  return [question, correctAnswer];
};

export default () => run(gameDescription, generateRoundData);
