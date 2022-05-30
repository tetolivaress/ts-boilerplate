import ItemList from '@components/Items/ItemList';
import { render, screen, within } from '@testing-library/react';
import { itemsMock } from '@mocks/items';

// test('Should throw error since no item is provided', () => {
//   const item = { id: null, title: null, description: null }
//   expect(render(<Item item={item} />)).toThrowError()
// })

test('Should Render items list', () => {
  render(<ItemList items={itemsMock}/>)
  const itemElements = screen.getAllByRole('listitem')
  // const itemElement = screen.getByAltText(/footer logo/i)
  expect(itemElements.length).toBe(itemsMock.length)
})

test('Should Render items in same order as mock', () => {
  render(<ItemList items={itemsMock}/>)
  const itemElements = screen.getAllByRole('listitem')
  const itemsMockNames = itemsMock.map(item => item.name)
  const itemElementsNames = itemElements.map(item => item.querySelectorAll('p')[0].textContent)
  expect(itemsMockNames).toEqual(itemElementsNames)
})