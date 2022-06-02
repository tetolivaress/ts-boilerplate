import { renderHook, act } from '@testing-library/react-hooks'
import { Wrapper } from '@utils/tests/LoadingWrapper'
import { useItems } from '@hooks/useItems';
import { itemsMock } from '@mocks/items';

it('Should have an empty array of items', async () => {
  const { result } = renderHook(useItems, { wrapper: Wrapper })
  expect(result.current.items).toEqual([])
  await act(async () => {
    await result.current.getItems()
  })
  expect(result.current.items).toEqual(itemsMock)
})