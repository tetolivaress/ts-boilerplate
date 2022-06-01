
import { useContext } from 'react';
import { LoadingContext } from '@context/LoadingContext';

export const useLoading = () => {
  const handleLoading = useContext(LoadingContext)

  return { ...handleLoading }
}