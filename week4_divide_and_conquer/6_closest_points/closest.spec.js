const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Closest Points', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./closest');
  });
  test('(2, 0 0, 3 4) = 5.0', () => {
    func('2');
    func('0 0');
    func('3 4');
    expect(mockLog).toHaveBeenLastCalledWith('5.0');
  });
});
