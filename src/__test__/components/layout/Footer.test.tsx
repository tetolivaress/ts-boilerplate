import Footer from '@components/layout/Footer'
import { render, screen } from '@testing-library/react'

test('Should render footer', () => {
  render(<Footer />)
  const footerElement = screen.getByText(/footer/i)
  // const footerElement = screen.getByAltText(/footer logo/i)
  expect(footerElement).toBeInTheDocument()
})
