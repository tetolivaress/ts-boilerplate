import Loading from '@components/layout/Loading';
import { render, screen } from '@testing-library/react';

// Create portal element before all tests so that it does not throw error
beforeAll(() => {
  const portalRoot = document.createElement('div')
  portalRoot.setAttribute('id', 'loading')
  document.body.appendChild(portalRoot)
})

test('Render null content when open prop set to false', () => {
  render(<Loading open={false} children={<p></p>}/>)
  const loadingElement = screen.queryByText(/loading.../i)
  expect(loadingElement).toBeFalsy()
})

test('Render loading when open prop set to true', () => {
  render(<Loading open={true} children={<span>Loading...</span>}/>)
  const loadingElement = screen.queryByText(/loading.../i)
  expect(loadingElement).toBeInTheDocument()
})
