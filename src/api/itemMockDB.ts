import { itemsMock } from '@mocks/items'
import { sleep } from '@utils/promise'

export const get = async () => {
  await sleep(1000)
  return itemsMock
}
