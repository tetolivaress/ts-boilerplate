import { ItemInterface } from '@interfaces/Items';
import EmptyList from './EmptyList';
import Item from './Item'

interface Props {
  items: ItemInterface[] 
}

const ItemsList = ({ items }: Props) => {

  if (!items.length)
    return <EmptyList />

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  )
}

export default ItemsList