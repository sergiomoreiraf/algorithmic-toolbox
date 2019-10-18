const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Maximum Pairwise Product', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./max_pairwise_product');
  });

  test('3, [1, 2, 3] = 6', () => {
    func('3');
    func('1 2 3');
    expect(mockLog).toHaveBeenLastCalledWith('6');
  });
});
