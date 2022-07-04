import { renderHook, act } from '@testing-library/react-hooks'
import { Wrapper } from '@utils/tests/LoadingWrapper'
import { useItems } from '@hooks/useItems'
import { itemsMock } from '@mocks/items'
import { waitFor } from '@testing-library/dom'
import { useLoading } from '../../hooks/useLoading'
import { mocked } from 'jest-mock'

jest.mock('../../hooks/useLoading')
const showLoadingMock = jest.fn()
const hideLoadingMock = jest.fn()

describe('tests of useItems hook', () => {
  beforeEach(() => {
    mocked(useLoading).mockReturnValue({
      isLoading: false,
      showLoading: showLoadingMock,
      hideLoading: hideLoadingMock
    })
  })

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

  it('should call showLoading and hideLoading method', async () => {
    const { waitForNextUpdate } = renderHook(useItems, { wrapper: Wrapper })
    await waitForNextUpdate()
    expect(showLoadingMock).toHaveBeenCalled()
    expect(hideLoadingMock).toHaveBeenCalled()
  })
})
