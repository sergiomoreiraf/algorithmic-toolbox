require('mock-stdin').stdin();

jest.spyOn(process, 'exit').mockImplementation(() => {});
const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('Sum of 2 numbers', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    func = require('./aplusb');
  });
  test('1 + 2 = 3', () => {
    func('1 2');
    expect(logSpy).toHaveBeenLastCalledWith(3);
  });

  test('2 + 5 = 7', () => {
    func('2 5');
    expect(logSpy).toHaveBeenLastCalledWith(7);
  });
});
