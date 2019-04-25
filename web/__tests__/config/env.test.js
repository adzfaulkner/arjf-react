import getEnv from '../../src/config/env';
const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules() // this is important
  process.env = {
    REACT_APP_TEST: "just testing",
  };
});

afterEach(() => {
  process.env = OLD_ENV;
});

test('Get a valid env var', () => {
  expect(getEnv('TEST')).toEqual('just testing');
});

test('Get an env that does not exist', () => {
  expect(() => {
    getEnv('INVALID');
  }).toThrow();
});