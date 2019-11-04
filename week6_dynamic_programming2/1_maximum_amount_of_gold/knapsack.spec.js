const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Maximum Amount of Gold', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./knapsack');
  });
  test('(10 3, 1 4 8) = 9', () => {
    func('10 3');
    func('1 4 8');
    expect(mockLog).toHaveBeenLastCalledWith('9');
  });
});
