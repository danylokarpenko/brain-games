
import readlineSync from 'readline-sync';

export const getRandomInt = (fromIntNumIncluded, toIntNumIncluded) => {
  const min = Math.ceil(fromIntNumIncluded);
  const max = Math.floor(toIntNumIncluded);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const amountOfRaunds = 3;
export const run = (gameDescription, generateGame = 0) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription !== '' ? `${gameDescription}\n` : '');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);
  for (let i = 0; i < amountOfRaunds; i += 1) {
    if (generateGame === 0) break;
    const values = generateGame();
    const question = values[0];
    const correctAnswer = String(values[1]);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) console.log('Correct!');
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === 2) console.log(`Congratulations, ${userName}!`);
  }
};
