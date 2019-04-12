import { getCategories } from '../../src/repositories/categories';

test('getCategories should return an array', () => {
  const cats = getCategories();
  expect(cats).toBeInstanceOf(Array);
});
