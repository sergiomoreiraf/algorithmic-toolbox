const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe('Maximum Value of the Loot', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./fractional_knapsack');
  });
  test('(3 50, [60 100 120], [20 50 30]) = 180.0000', () => {
    func('3 50');
    func('60 20');
    func('100 50');
    func('120 30');
    expect(mockLog).toHaveBeenLastCalledWith('180.0000');
  });
});
