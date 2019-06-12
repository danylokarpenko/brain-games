"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whatIsYouName = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const whatIsYouName = () => {
  const name = _readlineSync.default.question('May I have your name?');

  console.log(`Hello, ${name}!`);
};

exports.whatIsYouName = whatIsYouName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aGF0SXNZb3VOYW1lIiwibmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ08sTUFBTUEsYUFBYSxHQUFHLE1BQUs7QUFDaEMsUUFBTUMsSUFBSSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQix1QkFBdEIsQ0FBYjs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0osSUFBSyxHQUEzQjtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuZXhwb3J0IGNvbnN0IHdoYXRJc1lvdU5hbWUgPSAoKSA9PntcbiAgY29uc3QgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/Jyk7XG4gIGNvbnNvbGUubG9nKGBIZWxsbywgJHtuYW1lfSFgKTtcbn1cbiJdfQ==