import { ItemInterface } from '@interfaces/Items'

interface Props {
  item: ItemInterface
}

const Item = ({ item }: Props) => {
  return (
    <>
      <p>{item.name}</p>
      <p>{item.description}</p>
    </>
  )
}

export default Item
