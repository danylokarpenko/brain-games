import run from '..';
import getRandomInt from '../utils';

const gameDescription = 'What is the result of the expression?';

const calculateValue = (operation, a, b) => {
  switch (operation) {
    case '+': {
      return `${a + b}`;
    }
    case '-': {
      return `${a - b}`;
    }
    case '*': {
      return `${a * b}`;
    }
    default:
      return null;
  }
};

const operations = '+-*';

const putInBrackets = x => (x < 0 ? `(${x})` : `${x}`);

const generateRoundData = () => {
  const x = getRandomInt(-100, 100);
  const y = getRandomInt(-100, 100);
  const operationIndex = getRandomInt(0, operations.length - 1);

  const question = `${putInBrackets(x)} ${operations[operationIndex]} ${putInBrackets(y)}`;
  const correctAnswer = calculateValue(operations[operationIndex], x, y);

  return [question, correctAnswer];
};

export default () => run(gameDescription, generateRoundData);
