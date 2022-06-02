import Layout from '@components/layout'
import { LoadingProvider } from '@context/LoadingContext'
import Home from '@pages/Home'

const App = () => {
  return (
    <LoadingProvider>
      <Layout>
        <Home />
      </Layout>
    </LoadingProvider>
  )
}

export default App
