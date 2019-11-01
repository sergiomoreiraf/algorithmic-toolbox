const mockProcess = require('jest-mock-process');

mockProcess.mockProcessExit();
const mockStdout = mockProcess.mockProcessStdout();
const mockLog = mockProcess.mockConsoleLog();

describe.skip('Car Fueling', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    func = require('./car_fueling');
  });
  test('(950, 400, 4, [200 375 550 750] = 2', () => {
    func('950');
    func('400');
    func('4');
    func('200 375 550 750');
    expect(mockLog).toHaveBeenLastCalledWith('2');
  });
});
