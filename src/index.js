import readlineSync from 'readline-sync';


export const welcome = (description = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(description !== '' ? `${description}\n` : '');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);
  return userName;
};

export const getRandomInt = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const isEvenYesOrNo = (number) => {
  return number % 2 === 0 ? 'yes' : 'no';
};

export const brainEven = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInt(-100, 100);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (isEvenYesOrNo(randomNum) === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEvenYesOrNo(randomNum)}'.\nLet's try again, ${userName}!`);
      return;
    }
    if (i === 2)console.log(`Congratulations, ${userName}!`);
  }
};

const sum = (a, b, toStr = true) => {
  return toStr === true ? a + b : `${a} + ${b}`;
};
const sub = (a, b, toStr = true) => {
  return toStr === true ? a - b : `${a} - ${b}`;
};
const mul = (a, b, toStr = true) => {
  return toStr === true ? a * b : `${a} * ${b}`;
};

const operation = [3];
operation[0] = sum;
operation[1] = sub;
operation[2] = mul;

export const brainCalc = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const x = getRandomInt(-100, 100);
    const y = getRandomInt(-100, 100);
    const index = getRandomInt(0, 2);

    console.log(`Question: ${operation[index](x, y, 'toStr')} `);
    const answer = Math.round(readlineSync.question('Your answer: '));

    if (operation[index](x, y) === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${operation[index](x, y)}'.\nLet's try again, ${userName}!`);
      return;
    }
    if (i === 2)console.log(`Congratulations, ${userName}!`);
  }
};
