const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Sum of 2 numbers', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    func = require('./aplusb');
  });
  test('2 + 3 = 5', () => {
    func('2 3');
    expect(mockLog).toHaveBeenLastCalledWith('5');
  });
});
