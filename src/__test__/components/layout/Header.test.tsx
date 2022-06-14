import Header from '@components/layout/Header'
import { render, screen } from '@testing-library/react'

test('Should render header', () => {
  render(<Header />)
  const headerElement = screen.getByText(/header/i)
  // const headerElement = screen.getByAltText(/header/i)
  expect(headerElement).toBeInTheDocument()
})
