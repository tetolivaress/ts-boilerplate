import { useItems } from '@hooks/useItems'
import ItemForm from './ItemForm'
import ItemsList from './ItemList'

const Items = () => {
  const { items } = useItems()
  const activeItemsMock = items.filter(({ isActive }) => isActive)
  return (
    <>
      <ItemForm />
      <ItemsList items={activeItemsMock} />
    </>
  )
}

export default Items
