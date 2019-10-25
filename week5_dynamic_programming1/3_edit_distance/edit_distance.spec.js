const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Edit Distance', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./edit_distance');
  });
  test('(ab, ab) = 0', () => {
    func('ab');
    func('ab');
    expect(mockLog).toHaveBeenLastCalledWith('0');
  });
});
