import readlineSync from 'readline-sync';
// import { cons, car, cdr } from 'hexlet-pairs';

export const welcome = (description = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(description !== '' ? `${description}\n` : '');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);
  return userName;
};
//  randomIntValue
export const getRandomInt = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const loop = (userName, brainGame) => {
  for (let i = 0; i < 3; i += 1) {
    const status = brainGame();
    if (status === 0) {
      break;
    }
    if (i === 2)console.log(`Congratulations, ${userName}!`);
  }
  return 0;
};
