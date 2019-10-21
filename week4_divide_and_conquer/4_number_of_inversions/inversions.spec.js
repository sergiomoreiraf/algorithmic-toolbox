const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Number of Inversions', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./inversions');
  });
  test('(5, [2 3 9 2 9]) = 2', () => {
    func('5');
    func('2 3 9 2 9');
    expect(mockLog).toHaveBeenLastCalledWith('2');
  });
});
