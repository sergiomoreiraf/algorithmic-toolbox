const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Fibonacci Number', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./fibonacci');
  });
  test('(10) = 55', () => {
    func('10');
    expect(mockLog).toHaveBeenLastCalledWith('55');
  });
});
