const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Partitioning Souvenirs', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./partition3');
  });
  test('(4, 3 3 3) = 0', () => {
    func('4');
    func('3 3 3');
    expect(mockLog).toHaveBeenLastCalledWith('0');
  });
});
