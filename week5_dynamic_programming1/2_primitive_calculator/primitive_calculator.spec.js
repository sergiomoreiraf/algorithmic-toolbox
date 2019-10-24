const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe('Primitive Calculator', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./primitive_calculator');
  });
  test('(1) = 0, 1', () => {
    func('1');
    expect(mockLog).toHaveBeenCalledWith('0');
    expect(mockLog).toHaveBeenLastCalledWith('1');
  });
});
