import Index from '@components/layout'
import { render, screen } from '@testing-library/react'

test('Render Header, footer and children', () => {
  render(<Index children={<p>text</p>} />)
  const headerElement = screen.getByText(/header/i)
  const indexElement = screen.getByText(/text/i)
  const footerElement = screen.getByText(/footer/i)
  expect(headerElement).not.toBeEmptyDOMElement()
  expect(footerElement).toBeInTheDocument()
  expect(indexElement).toBeInTheDocument()
})
