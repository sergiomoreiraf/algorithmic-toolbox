const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Organizing a Lottery', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./points_and_segments');
  });
  test('(2 3, 0 5, 7 10, 1 6 11) = 1 0 0', () => {
    func('2 3');
    func('0 5');
    func('7 10');
    func('1 6 11');
    expect(mockLog).toHaveBeenLastCalledWith('1 0 0');
  });
});
