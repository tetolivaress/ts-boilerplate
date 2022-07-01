import { render, screen, fireEvent } from '@testing-library/react'
import ItemForm from '@components/Items/ItemForm'

describe('Item Form', () => {
  it('shoult  have a empty string', () => {
    render(<ItemForm />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('')
  })

  it('shoult has a string setted', () => {
    render(<ItemForm />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.input(input, { target: { value: 'inputText' } })
    expect(input.value).toBe('inputText')
  })
})
