const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Majority Element', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./majority_element');
  });
  test('(5 [2 3 9 2 2]) = 1', () => {
    func('5');
    func('2 3 9 2 2');
    expect(mockLog).toHaveBeenLastCalledWith('1');
  });
});
