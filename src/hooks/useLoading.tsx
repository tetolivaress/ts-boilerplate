
import { useContext } from 'react';
import { LoadingContext } from '@context/LoadingContext';

export const useLoading = () => {
  const loadingContext = useContext(LoadingContext)

  return { ...loadingContext }
}