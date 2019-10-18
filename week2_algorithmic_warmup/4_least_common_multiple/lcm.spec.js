const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Least Common Multiple', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    func = require('./lcm');
  });
  test('(6 8) = 24', () => {
    func('6 8');
    expect(mockLog).toHaveBeenLastCalledWith('24');
  });
});
