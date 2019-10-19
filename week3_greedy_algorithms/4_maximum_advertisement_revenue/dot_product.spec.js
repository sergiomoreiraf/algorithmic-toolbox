const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe('Maximum Advertisement Revenue', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./dot_product');
  });
  test('(1, [23], [39]) = 897', () => {
    func('1');
    func('23');
    func('39');
    expect(mockLog).toHaveBeenLastCalledWith('897');
  });
});
