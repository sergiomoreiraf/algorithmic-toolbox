const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe('Maximum Salary', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./largest_number');
  });
  test('(2, [21 2]) = 221', () => {
    func('2');
    func('21 2');
    expect(mockLog).toHaveBeenLastCalledWith('221');
  });
});
