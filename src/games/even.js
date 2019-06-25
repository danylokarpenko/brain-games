import { getRandomInt, run } from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no"';

const isEven = num => (num % 2 === 0);
const generateBrainEven = () => {
  const question = getRandomInt(-100, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => run(gameDescription, generateBrainEven);
