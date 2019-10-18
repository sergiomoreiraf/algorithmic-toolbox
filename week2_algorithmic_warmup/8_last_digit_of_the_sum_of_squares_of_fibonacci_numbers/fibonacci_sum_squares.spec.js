const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Last Digit of the Sum of Squares of Fibonacci Numbers', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    func = require('./fibonacci_sum_squares');
  });
  test('(7) = 3', () => {
    func('7');
    expect(mockLog).toHaveBeenLastCalledWith('3');
  });
});
