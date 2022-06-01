import { render, screen } from '@testing-library/react'
import App from '../App'

test('Renders app and looks for footer element', () => {
  render(<App />)
  const linkElement = screen.getByText(/header/i)
  expect(linkElement).toBeInTheDocument()
})