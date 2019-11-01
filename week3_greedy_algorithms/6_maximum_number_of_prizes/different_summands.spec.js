const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Maximum Number of Prizes', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./different_summands');
  });
  test('(6) = 3, 1 2 3', () => {
    func('6');
    expect(mockLog).toHaveBeenCalledWith('3');
    expect(mockStdout).toHaveBeenNthCalledWith(1, '1 ');
    expect(mockStdout).toHaveBeenNthCalledWith(2, '2 ');
    expect(mockStdout).toHaveBeenNthCalledWith(3, '3 ');
  });
});
