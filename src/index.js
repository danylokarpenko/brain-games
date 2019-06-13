var readlineSync = require('readline-sync');
export const askUserName = () =>{
  var userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');
}
askUserName();
