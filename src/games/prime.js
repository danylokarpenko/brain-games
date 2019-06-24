import { getRandomInt, run } from '..';

const isPrime = (num) => {
  if (num < 2) return false;
  const half = num / 2;
  for (let i = 2; i <= half; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const question = getRandomInt(-10, 200);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => run(gameDescription, brainPrime);
