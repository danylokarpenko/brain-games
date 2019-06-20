import { getRandomInt } from '..';
import readlineSync from 'readline-sync';

const brainEven = (userName) => {
  return () => {
    const questionValue = getRandomInt(-100, 100);
    console.log(`Question: ${questionValue}`);
    const correctAnswer = questionValue % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return 0;
    }
    return 1;
  };
};

export default brainEven;
