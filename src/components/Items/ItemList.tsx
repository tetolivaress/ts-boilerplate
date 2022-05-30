import { Item as ItemInterface } from '@interfaces/Items';
import Item from './Item';

interface Props {
  items: ItemInterface[];
}

const ItemsList = ({ items }: Props) => {
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