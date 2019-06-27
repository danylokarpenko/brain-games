import run from '..';
import getRandomInt from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;
const generateRoundData = () => {
  const question = getRandomInt(-100, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => run(gameDescription, generateRoundData);
