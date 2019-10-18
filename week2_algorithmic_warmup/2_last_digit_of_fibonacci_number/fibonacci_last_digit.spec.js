const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Last Digit of a Large Fibonacci Number', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    func = require('./fibonacci_last_digit');
  });
  test('(3) = 2', () => {
    func('3');
    expect(mockLog).toHaveBeenLastCalledWith(2);
  });
});
