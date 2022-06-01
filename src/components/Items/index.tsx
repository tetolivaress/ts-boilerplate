import { itemsMock } from "@mocks/items"
import ItemsList from "./ItemList"

const Items = () => {
  const activeItemsMock = itemsMock.filter(({ isActive }) => isActive)
  return <ItemsList items={activeItemsMock} />
}

export default Items