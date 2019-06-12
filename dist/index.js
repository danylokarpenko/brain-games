"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.askUserName = void 0;

var readlineSync = require('readline-sync');

const askUserName = () => {
  var userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');
};

exports.askUserName = askUserName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWFkbGluZVN5bmMiLCJyZXF1aXJlIiwiYXNrVXNlck5hbWUiLCJ1c2VyTmFtZSIsInF1ZXN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUlBLFlBQVksR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBQ08sTUFBTUMsV0FBVyxHQUFHLE1BQUs7QUFDOUIsTUFBSUMsUUFBUSxHQUFHSCxZQUFZLENBQUNJLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWY7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBUUgsUUFBUixHQUFtQixHQUEvQjtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVhZGxpbmVTeW5jID0gcmVxdWlyZSgncmVhZGxpbmUtc3luYycpO1xuZXhwb3J0IGNvbnN0IGFza1VzZXJOYW1lID0gKCkgPT57XG4gIHZhciB1c2VyTmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZygnSGkgJyArIHVzZXJOYW1lICsgJyEnKTtcbn1cbiJdfQ==