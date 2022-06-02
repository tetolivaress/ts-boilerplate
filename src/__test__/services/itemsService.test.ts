import { getItemsMock } from "@services/itemsService";
import { itemsMock } from '@mocks/items';

it('Should fail if I modify returned items', async () => {
  const mockedItemsResponse = await getItemsMock()
  expect(mockedItemsResponse).toEqual(itemsMock)
})