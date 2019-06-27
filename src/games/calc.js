import run from '..';
import getRandomInt from '../utils';

const generateOperation = (operationIndex, a, b) => {
  switch (operationIndex) {
    case '+': {
      const correctAnswer = a + b;
      return `${correctAnswer}`;
    }
    case '-': {
      const correctAnswer2 = a - b;
      return `${correctAnswer2}`;
    }
    case '*': {
      let x = a;
      let y = b;
      if (Math.abs(x) > 30 || Math.abs(y) > 20) {
        x = getRandomInt(-100, 100);
        y = getRandomInt(-10, 10);
      }
      const correctAnswer3 = x * y;
      return `${correctAnswer3}`;
    }
    default:
      return 0;
  }
};

const gameDescription = 'What is the result of the expression?';

const stringOperations = '+-*';

const generateRoundData = () => {
  const x = getRandomInt(-100, 100);
  const y = getRandomInt(-100, 100);
  const indexOfString = getRandomInt(0, 2);
  const question = y >= 0 ? `${x} ${stringOperations[indexOfString]} ${y}` : `${x} ${stringOperations[indexOfString]} (${y})`;
  const correctAnswer = generateOperation(stringOperations[indexOfString], x, y);
  return [question, correctAnswer];
};

export default () => run(gameDescription, generateRoundData);
