import run from '..';
import getRandomInt from '../utils';

const operations = (operationIndex, a, b) => {
  switch (operationIndex) {
    case '+': {
      const question = b > 0 ? `${a} + ${b}` : `${a} - ${-b}`;
      const correctAnswer = a + b;
      return [question, correctAnswer];
    }
    case '-': {
      const question2 = b > 0 ? `${a} - ${b}` : `${a} + ${-b}`;
      const correctAnswer2 = a - b;
      return [question2, correctAnswer2];
    }
    case '*': {
      let x = a;
      let y = b;
      if (Math.abs(x) > 30 || Math.abs(y) > 20) {
        x = getRandomInt(-100, 100);
        y = getRandomInt(-10, 10);
      }
      const question3 = b > 0 ? `${x} * ${y}` : `${x} * (${y})`;
      const correctAnswer3 = x * y;
      return [question3, correctAnswer3];
    }
    default:
      return 0;
  }
};

const gameDescription = 'What is the result of the expression?';

const firstIndex = 0;
const lastIndex = 2;
const sOperations = '+-*';

const generateBrainCalc = () => {
  const x = getRandomInt(-100, 100);
  const y = getRandomInt(-100, 100);
  const indexOfString = getRandomInt(firstIndex, lastIndex);
  const values = operations(sOperations[indexOfString], x, y);
  const question = `${values[0]}`;
  const correctAnswer = String(values[1]);
  return [question, correctAnswer];
};

export default () => run(gameDescription, generateBrainCalc);
