import { useItems } from "@hooks/useItems"
import ItemsList from "./ItemList"

const Items = () => {
  const { items } = useItems()

  const activeItemsMock = items.filter(({ isActive }) => isActive)
  return <ItemsList items={activeItemsMock} />
}

export default Items