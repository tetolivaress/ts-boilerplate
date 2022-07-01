import { renderHook, act, WaitFor } from '@testing-library/react-hooks'
import { Wrapper } from '@utils/tests/LoadingWrapper'
import { useItems } from '@hooks/useItems'
import { itemsMock } from '@mocks/items'
import { waitFor } from '@testing-library/dom'

it('Should have an empty array of items', async () => {
  const { result } = renderHook(useItems, { wrapper: Wrapper })
  expect(result.current.items).toEqual([])
  await act(async () => {
    await result.current.getItems()
  })
  expect(result.current.items).toEqual(itemsMock)
})

it('should update array items when after a time', async () => {
  const { result } = renderHook(useItems, { wrapper: Wrapper })
  await waitFor(() => expect(result.current.items).toEqual(itemsMock))
  expect(result.current.items.length).toBeGreaterThan(0)
})
