const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Last Digit of the Sum of Fibonacci Numbers', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./fibonacci_sum_last_digit');
  });
  test('(3) = 4', () => {
    func('3');
    expect(mockLog).toHaveBeenLastCalledWith('4');
  });
});
