const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Last Digit of the Sum of Fibonacci Numbers Again', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    func = require('./fibonacci_partial_sum');
  });
  test('(3 7) = 1', () => {
    func('3 7');
    expect(mockLog).toHaveBeenLastCalledWith('1');
  });
});
