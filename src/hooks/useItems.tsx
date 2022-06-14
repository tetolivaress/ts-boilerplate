import { useState, useEffect, useCallback } from 'react'
import { getItemsMock } from '@services/itemsService'
import { ItemInterface } from '@interfaces/Items'
import { useLoading } from './useLoading'

export const useItems = () => {
  const [items, setItems] = useState<ItemInterface[]>([])
  const { showLoading, hideLoading } = useLoading()

  const getItems = async () => {
    showLoading()
    const itemsResponse = await getItemsMock()
    hideLoading()
    setItems(itemsResponse)
  }

  const getItemsCallback = useCallback(getItems, [showLoading, hideLoading])

  useEffect(() => {
    getItemsCallback()
  }, [getItemsCallback])
  return {
    items,
    getItems: getItemsCallback
  }
}
