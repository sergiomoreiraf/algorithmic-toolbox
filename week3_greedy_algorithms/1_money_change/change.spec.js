const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Money Change', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./change');
  });
  test('(2) = 2', () => {
    func('2');
    expect(mockLog).toHaveBeenLastCalledWith('2');
  });
});
