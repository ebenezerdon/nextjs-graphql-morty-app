import '../../styles/globals.scss'
import { ApolloProvider } from '@apollo/client'
import client from '../apolloClient'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
