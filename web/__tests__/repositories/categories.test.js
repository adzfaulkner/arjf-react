import { getCategories } from '../../src/repositories/categories';

test('getCategories should return an array and a length of 3', () => {
  const cats = getCategories();
  expect(cats).toBeInstanceOf(Array);
  expect(cats).toHaveLength(3);
});

