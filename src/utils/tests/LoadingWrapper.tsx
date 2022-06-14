import { LoadingProvider } from '@context/LoadingContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Wrapper = ({ children }: Props) => {
  return <LoadingProvider>{children}</LoadingProvider>
}
