import { getRandomInt, run } from '..';

const sum = (a, b) => {
  const question = b > 0 ? `${a} + ${b}` : `${a} - ${-b}`;
  const correctAnswer = a + b;
  return [question, correctAnswer];
};


const sub = (a, b) => {
  const question = b > 0 ? `${a} - ${b}` : `${a} + ${-b}`;
  const correctAnswer = a - b;
  return [question, correctAnswer];
};

const mul = (x, y) => {
  let a = x;
  let b = y;
  if (Math.abs(a) > 30 || Math.abs(b) > 20) {
    a = getRandomInt(-100, 100);
    b = getRandomInt(-10, 10);
  }
  const question = b > 0 ? `${a} * ${b}` : `${a} * (${b})`;
  const correctAnswer = a * b;
  return [question, correctAnswer];
};

const operation = [3];
operation[0] = sum;
operation[1] = sub;
operation[2] = mul;

const rules = 'What is the result of the expression?';

const brainCalc = () => {
  const x = getRandomInt(-100, 100);
  const y = getRandomInt(-100, 100);
  const index = getRandomInt(0, 2);
  const valuesArray = operation[2](x, y);
  const question = `${valuesArray[0]}`;
  const correctAnswer = valuesArray[1];
  return [question, correctAnswer];
};

export default () => run(rules, brainCalc);
