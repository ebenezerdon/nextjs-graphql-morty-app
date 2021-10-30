import Head from 'next/head'
import Card from '../components/Card'
import client from '../apolloConfig'
import { GET_ALL_CHARACTERS } from '../queries'
import { useEffect, useState } from 'react'

export default function Home() {
  const [characters, setCharacters] = useState(null)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    (async () => {
      const { data, error } = await client.query({ query: GET_ALL_CHARACTERS })
      data && setCharacters(data.characters)
      error && setFetchError(error)
    })()
  }, [])

  return (
    <div>
      <Head>
        <title>Morty GraphQL | Next.js</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <div className="title"><span>Next/GraphQL </span>Rick and Morty Character App</div>
        {!characters && !fetchError && (<p>Loading...</p>)}
        {fetchError && (<p>Error fetching data...</p>)}
        <div className="row">
          {characters?.results.map(character =>
            <Card character={character} key={character.id}/>
          )}
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}
