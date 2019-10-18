const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Greatest Common Divisor', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./gcd');
  });
  test('(18 35) = 1', () => {
    func('18 35');
    expect(mockLog).toHaveBeenLastCalledWith('1');
  });
});
