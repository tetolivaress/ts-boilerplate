import { itemsMock } from '@mocks/items'

test('import with alias', () => {
  expect(itemsMock).toEqual(itemsMock)
})
