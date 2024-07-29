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

test('handning slash n (new line) between numbers (1)', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('handning multiple slash n (new line) between numbers (2)', () => {
  expect(add('\n1\n\n\n\n\n\n2,3\n')).toBe(6);
});

test('handling different delimiters (1)', () => {
  expect(add('//;\n1;2')).toBe(3);
});

test('handling different delimiters (2)', () => {
  expect(add('//;;\n1;;2')).toBe(3);
});

test('handling different delimiters (3) (multiple slash n)', () => {
  expect(add('//;;\n\n\n\n\n1;;\n2')).toBe(3);
});

test('handling different delimeters (3)', () => {
  expect(add('//,\n1,2')).toBe(3);
});

test('do not alloww negative numbers ', () => {
  expect(() => add('1,-2,3')).toThrow('negative numbers not allowed: -2');
});

test('do not alloww negative numbers with delimiter and slash n', () => {
  expect(() => add('//;;\n\n\n\n\n-1;;\n2')).toThrow('negative numbers not allowed: -1');
});

test('do not alloww negative numbers (more than one negative numbers)', () => {
  expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
});

test('do not alloww negative numbers with delimiter and slash n', () => {
  expect(() => add('//;;\n\n\n\n\n-1;;2;;\n-3')).toThrow('negative numbers not allowed: -1,-3');
});