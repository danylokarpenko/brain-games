import { getRandomInt, run } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no"';

const brainEven = () => {
  const question = getRandomInt(-100, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => run(rules, brainEven);
