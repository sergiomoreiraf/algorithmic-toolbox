const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Collecting Signatures', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./covering_segments');
  });
  test('(3, [1 2 3], [3 5 6]) = 1, 3', () => {
    func('3');
    func('1 3');
    func('2 5');
    func('3 6');
    expect(mockLog).toHaveBeenCalledWith('1');
    expect(mockLog).toHaveBeenLastCalledWith('3');
  });
});
