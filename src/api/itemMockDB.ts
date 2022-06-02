import { itemsMock } from '@mocks/items'
import { sleep } from '@utils/promise'

export const getItemsMock = async () => {
  console.log('loading')
  await sleep(1000)
  return itemsMock
}