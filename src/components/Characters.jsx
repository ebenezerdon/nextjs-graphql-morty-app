import Head from 'next/head'
import Card from './Card'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Characters = ({ characters }) => {
  const router = useRouter()
  const page = Number(router.query.page) || 1

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
        <div className="row">
          {characters?.results.map((character) => (
            <Card character={character} key={character.id} />
          ))}
        </div>
      </main>

      <footer>
        {page > 1 && (
          <Link href={`/${page - 1}`} passHref>
            <button>Previous Page</button>
          </Link>
        )}

        <Link href={`/${page + 1}`} passHref>
          <button>Next Page</button>
        </Link>
      </footer>
    </div>
  )
}

export default Characters
