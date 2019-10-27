const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Longest Common Subsequence of Three Sequences', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./lcs3');
  });
  test('(3, 1 2 3, 3, 2 1 3, 3, 1 3 5) = 2', () => {
    func('3');
    func('1 2 3');
    func('3');
    func('2 1 3');
    func('3');
    func('1 3 5');
    expect(mockLog).toHaveBeenLastCalledWith('2');
  });
});
