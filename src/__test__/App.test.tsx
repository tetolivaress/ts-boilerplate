import { render, screen } from '@testing-library/react'
import App from '../App'
import { createLoadingContainer } from '@utils/tests/createLoadingContainer';

beforeAll(createLoadingContainer)

test('Renders app and looks for footer element', () => {
  render(<App />)
  const linkElement = screen.getByText(/header/i)
  expect(linkElement).toBeInTheDocument()
})