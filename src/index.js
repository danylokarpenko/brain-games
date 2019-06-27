
import readlineSync from 'readline-sync';

const roundsCount = 3;
const run = (gameDescription, generateRaund) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const raundData = generateRaund();
    const question = raundData[0];
    const correctAnswer = raundData[1];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) console.log('Correct!');
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default run;
