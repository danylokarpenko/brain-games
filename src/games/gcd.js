import run from '..';
import getRandomInt from '../utils';

const calculateGcd = (x, y) => {
  if (x === 0) return y;
  if (x < y) return calculateGcd(y, x);
  return calculateGcd(x - y, y);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateBrainGcd = () => {
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);

  const question = `${x} ${y}`;
  const correctAnswer = String(calculateGcd(x, y));
  return [question, correctAnswer];
};

export default () => run(gameDescription, generateBrainGcd);
