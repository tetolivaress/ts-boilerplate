import { render, screen } from '@testing-library/react'
import { LoadingProvider } from '@context/LoadingContext'

test("must show loading", () => {
  render(
    <LoadingProvider>
      <p>loading...</p>
    </LoadingProvider>
  )

  expect(screen.getByText(`loading...`)).toBeInTheDocument()
})