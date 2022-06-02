import { get } from '@api/itemMockDB'

export const getItemsMock = async () => {
  const items = await get()
  return items
}