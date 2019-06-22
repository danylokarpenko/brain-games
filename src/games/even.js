import * as logic from '..';

const brainEven = userName => () => {
  const strQuestion = logic.getRandomInt(-100, 100);
  const correctAnswer = strQuestion % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${strQuestion} `);
  const userAnswer = logic.getAnswer();

  if (String(correctAnswer) === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    return 0;
  }
  return 1;
};

const game = () => {
  const userName = logic.welcome('Answer "yes" if number even otherwise answer "no"');
  logic.loop(userName, brainEven(userName));
};

export default game;
