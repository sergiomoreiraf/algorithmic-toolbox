const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Improving Quick Sort', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./sorting');
  });
  test('(5 [2 3 9 2 2]) = 2 2 2 3 9', () => {
    func('5');
    func('2 3 9 2 2');
    expect(mockLog).toHaveBeenLastCalledWith('2 2 2 3 9');
  });
});
