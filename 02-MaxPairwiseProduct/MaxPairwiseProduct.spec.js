require('mock-stdin').stdin();

jest.spyOn(process, 'exit').mockImplementation(() => {});
const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('Max Pairwise Product on an array', () => {
  let func;
  beforeEach(() => {
    jest.resetModules();
    func = require('./MaxPairwiseProduct');
  });
  test('[2 3 4] = 12', () => {
    func('3');
    func('2 3 4');
    expect(logSpy).toHaveBeenLastCalledWith(12);
  });

  test('[34 25 76 35 2] = 2660', () => {
    func('5');
    func('34 25 76 35 2');
    expect(logSpy).toHaveBeenLastCalledWith(2660);
  });

  test('[10000 900000] = 9000000000', () => {
    func('2');
    func('10000 900000');
    expect(logSpy).toHaveBeenLastCalledWith(9000000000);
  });
});
