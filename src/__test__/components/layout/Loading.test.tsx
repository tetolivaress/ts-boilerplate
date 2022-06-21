import Loading from '@components/layout/Loading'
import { render, screen } from '@testing-library/react'
import { createLoadingContainer } from '@utils/tests/createLoadingContainer'

// Create portal element before all tests so that it does not throw error
beforeAll(createLoadingContainer)

test('Render null content when open prop set to false', () => {
  render(
    <Loading open={false}>
      <p></p>
    </Loading>
  )
  const loadingElement = screen.queryByText(/loading.../i)
  expect(loadingElement).toBeFalsy()
})

test('Render loading when open prop set to true', () => {
  render(
    <Loading open={true}>
      <span>Loading...</span>
    </Loading>
  )
  const loadingElement = screen.queryByText(/loading.../i)
  expect(loadingElement).toBeInTheDocument()
})
