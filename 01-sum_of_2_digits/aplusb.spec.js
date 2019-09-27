require('mock-stdin').stdin();

jest.spyOn(process, 'exit').mockImplementation(() => {});
const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

const sum = require('./aplusb');

describe('Sum of 2 numbers', () => {
  test('1 + 2 = 3', () => {
    sum('1 2');
    expect(logSpy).toHaveBeenLastCalledWith(3);
  });

  test('2 + 5 = 7', () => {
    sum('2 5');
    expect(logSpy).toHaveBeenLastCalledWith(7);
  });
});
