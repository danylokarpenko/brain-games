"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whatIsYourName = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const whatIsYourName = () => {
  const name = _readlineSync.default.question('May I have your name?');

  console.log(`Hello, ${name}!`);
};

exports.whatIsYourName = whatIsYourName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ3aGF0SXNZb3VyTmFtZSIsIm5hbWUiLCJyZWFkbGluZVN5bmMiLCJxdWVzdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNPLE1BQU1BLGNBQWMsR0FBRyxNQUFLO0FBQ2pDLFFBQU1DLElBQUksR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0IsdUJBQXRCLENBQWI7O0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQVNKLElBQUssR0FBM0I7QUFDRCxDQUhNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcbmV4cG9ydCBjb25zdCB3aGF0SXNZb3VyTmFtZSA9ICgpID0+e1xuICBjb25zdCBuYW1lID0gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdNYXkgSSBoYXZlIHlvdXIgbmFtZT8nKTtcbiAgY29uc29sZS5sb2coYEhlbGxvLCAke25hbWV9IWApO1xufVxuIl19