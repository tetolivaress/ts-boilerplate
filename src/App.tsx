import Layout from '@components/layout'
import { LoadingProvider } from '@context/LoadingContext'
import Items from './components/Items'

const App = () => {
  return (
    <LoadingProvider>
      <Layout>
        <Items />
      </Layout>
    </LoadingProvider>
  )
}

export default App
