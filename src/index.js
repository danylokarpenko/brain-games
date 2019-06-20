import readlineSync from 'readline-sync';

export const welcome = (gameDescription = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription !== '' ? `${gameDescription}\n` : '');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);
  return userName;
};
//  randomIntValue
export const getRandomInt = (fromIntNum, toIntNum) => {
  const min = Math.ceil(fromIntNum);
  const max = Math.floor(toIntNum);
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
