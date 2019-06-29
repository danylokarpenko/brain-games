import run from '..';
import getRandomInt from '../utils';

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

const gameDescription = 'What is the result of the expression?';

const operations = '+-*';

const generateRoundData = () => {
  const x = getRandomInt(-100, 100);
  const y = getRandomInt(-100, 100);
  const operationIndex = getRandomInt(0, operations.length - 1);

  let question = '';
  if (y < 0 && x < 0) question = `(${x}) ${operations[operationIndex]} (${y})`;
  else if (y >= 0 && x >= 0) question = `${x} ${operations[operationIndex]} ${y}`;
  else if (x < 0) question = `(${x}) ${operations[operationIndex]} ${y}`;
  else if (y < 0) question = `${x} ${operations[operationIndex]} (${y})`;

  const correctAnswer = calculateValue(operations[operationIndex], x, y);

  return [question, correctAnswer];
};

export default () => run(gameDescription, generateRoundData);
