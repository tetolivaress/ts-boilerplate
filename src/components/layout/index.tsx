import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import Loading from './Loading';
import { LoadingProvider } from '@context/LoadingContext';
import { useLoading } from '@hooks/useLoading';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  const { isLoading } = useLoading()
  return (
    <LoadingProvider>
      <div>
        <Header />
        {children}
        <Footer />
        <Loading open={isLoading}>
          <span>Loading...</span>
        </Loading>
      </div>
    </LoadingProvider>
  )
}

export default Layout