const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Longest Common Subsequence of Two Sequences', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./lcs2');
  });
  test('(3, 2 7 5, 2, 2 5) = 2', () => {
    func('3');
    func('2 7 5');
    func('2');
    func('2 5');
    expect(mockLog).toHaveBeenLastCalledWith('2');
  });
});
