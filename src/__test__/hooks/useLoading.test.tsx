import { renderHook, act } from '@testing-library/react-hooks'
import { useLoading } from '@hooks/useLoading'
import { Wrapper } from '@utils/tests/LoadingWrapper'

it('Should show loading', () => {
  const { result } = renderHook(useLoading, {wrapper: Wrapper})
  expect(result.current.isLoading).toBeFalsy()

  act(() => {
    result.current.showLoading()
  })

  expect(result.current.isLoading).toBeTruthy()

})

it('Should hide loading', () => {
  const { result } = renderHook(useLoading, {wrapper: Wrapper})
  act(() => {
    result.current.showLoading()
  })
  expect(result.current.isLoading).toBeTruthy()

  act(() => {
    result.current.hideLoading()
  })

  expect(result.current.isLoading).toBeFalsy()
})