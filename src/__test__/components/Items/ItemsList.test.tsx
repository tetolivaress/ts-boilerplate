import ItemList from '@components/Items/ItemList'
import { render, screen } from '@testing-library/react'
import { itemsMock } from '@mocks/items'

// https://stackoverflow.com/questions/57435680/whats-the-idiomatic-way-of-testing-a-list-with-dynamic-content-using-react-test

describe('DummyList', () => {
  it('render the items', async () => {
    const activeItemsMock = itemsMock.filter(({ isActive }) => isActive)
    render(<ItemList items={activeItemsMock} />)

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(2)
    listItems.forEach((_, index) => {
      expect(screen.getByText(activeItemsMock[index].name)).toBeInTheDocument()
    })
  })

  it('must show empty list', () => {
    render(<ItemList items={[]} />)
    expect(screen.getByText(/empty/i)).toBeInTheDocument()
  })

  it('do not must show empty list', () => {
    render(<ItemList items={itemsMock} />)
    expect(screen.queryByText(/empty/i)).not.toBeInTheDocument()
  })

  it('should not find inactive items', () => {
    const inactiveItemsMock = itemsMock.filter(({ isActive }) => !isActive)
    render(<ItemList items={inactiveItemsMock} />)

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(1)
    listItems.forEach((_, index) => {
      expect(
        screen.getByText(inactiveItemsMock[index].name)
      ).toBeInTheDocument()
    })
  })
})
