import readlineSync from 'readline-sync';

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);
  return userName;
};

export const getRandomInt = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const isEvenYesOrNo = (number) => {
  return number % 2 === 0 ? 'yes' : 'no';
};

export const brainEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no"\n');
  const userName = askUserName();
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
  }
};
