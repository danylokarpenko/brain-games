
import readlineSync from 'readline-sync';

export const welcome = (gameDescription = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription !== '' ? `${gameDescription}\n` : '');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);
  return userName;
};

export const getAnswer = () => readlineSync.question('Your answer: ');

//  randomIntValue
export const getRandomInt = (fromIntNum, toIntNum) => {
  const min = Math.ceil(fromIntNum);
  const max = Math.floor(toIntNum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const amountOfRaunds = 3;
export const run = (rules, generateGame) => {
  const userName = welcome(rules);
  for (let i = 0; i < amountOfRaunds; i += 1) {
    const valuesArray = generateGame();
    const question = valuesArray[0];
    const correctAnswer = String(valuesArray[1]);
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer();

    if (correctAnswer === userAnswer) console.log('Correct!');
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
    if (i === 2) console.log(`Congratulations, ${userName}!`);
  }
};
