const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Binary Search', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./binary_search');
  });
  test('(5 [1 5 8 12 13], 5 [8 1 23 1 11]) = 2 0 -1 0 -1', () => {
    func('5 1 5 8 12 13');
    func('5 8 1 23 1 11');
    expect(mockLog).toHaveBeenLastCalledWith('2 0 -1 0 -1');
  });
});
