import '../../styles/globals.scss'
import { ApolloProvider } from '@apollo/client'
import client from '../apolloConfig'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
