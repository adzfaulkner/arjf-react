import { getExamples } from '../../src/repositories/examples';

test('getExamples should return an array', () => {
  const examples = getExamples();
  expect(examples).toBeInstanceOf(Array);
});
