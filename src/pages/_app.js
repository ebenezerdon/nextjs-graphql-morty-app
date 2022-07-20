import React from 'react'
import '../../styles/globals.scss'
import { ApolloProvider } from '@apollo/client'
import client from '../apolloConfig'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
