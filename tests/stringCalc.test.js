const {add} = require('../src/stringCalc');

test('return 0 on empty string', () => {
  expect(add('')).toBe(0);
});

test('return number itself when there is only one input', () => {
  expect(add('1')).toBe(1);
});

test('return a+b on (a,b) (seperated by commas', () => {
  expect(add('1,2')).toBe(3);
});

test('handning slash n (new line) between numbers', () => {
  expect(add('1\n2,3')).toBe(6);
});

