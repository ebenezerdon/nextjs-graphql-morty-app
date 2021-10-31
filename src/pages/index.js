import client from '../apolloConfig'
import { GET_ALL_CHARACTERS } from '../queries'
import Characters from '../components/Characters'

export default function Home({ characters }) {
  return <Characters characters={characters} />
}

export const getStaticProps = async () => {
  const { data } = await client.query({ query: GET_ALL_CHARACTERS })

  return {
    props: {
      characters: data?.characters
    }
  }
}
