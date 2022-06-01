import Item from '@components/Items/Item';
import { render, screen } from '@testing-library/react'
import { itemsMock } from '@mocks/items';

// test('Should throw error since no item is provided', () => {
//   const item = { id: null, title: null, description: null }
//   expect(render(<Item item={item} />)).toThrowError()
// })

test('Should Render item with content', () => {
  render(<Item item={itemsMock[0]} />)
  const itemElement = screen.getByText(`${itemsMock[0].name}`)
  // const itemElement = screen.getByAltText(/footer logo/i)
  expect(itemElement).toBeInTheDocument()
})