import run from '..';
import getRandomInt from '../utils';

const gameDescription = 'What is the result of the expression?';

const calculateValue = (operation, a, b) => {
  let correctAnswer = 0;
  switch (operation) {
    case '+': {
      correctAnswer = a + b;
      return `${correctAnswer}`;
    }
    case '-': {
      correctAnswer = a - b;
      return `${correctAnswer}`;
    }
    case '*': {
      correctAnswer = a * b;
      return `${correctAnswer}`;
    }
    default:
      return null;
  }
};

const operations = '+-*';

const wrapNegativeValues = x => (x < 0 ? `(${x})` : `${x}`);

const generateRoundData = () => {
  const x = getRandomInt(-100, 100);
  const y = getRandomInt(-100, 100);
  const operationIndex = getRandomInt(0, operations.length - 1);

  const question = `${wrapNegativeValues(x)} ${operations[operationIndex]} ${wrapNegativeValues(y)}`;
  const correctAnswer = calculateValue(operations[operationIndex], x, y);

  return [question, correctAnswer];
};

export default () => run(gameDescription, generateRoundData);
