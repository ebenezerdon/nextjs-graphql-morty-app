import Head from 'next/head'
import Card from '../components/Card'
import { GET_ALL_CHARACTERS } from '../queries'
import { useQuery } from '@apollo/client'

export default function Home() {
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS)

  return (
    <div>
      <Head>
        <title>Morty GraphQL | Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="title">
          <span>Next/GraphQL </span>Rick and Morty Character App
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching data...</p>}
        <div className="row">
          {data?.characters?.results.map((character) => (
            <Card character={character} key={character.id} />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
