const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Fibonacci Number Again', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./fibonacci_huge');
  });
  test('(239 1000) = 161', () => {
    func('239 1000');
    expect(mockLog).toHaveBeenLastCalledWith('161');
  });
});
