import React from 'react'
import client from '../apolloConfig'
import { GET_ALL_CHARACTERS, GET_PAGE_INFO } from '../queries'
import Characters from '../components/Characters'

const Page = ({ characters }) => {
  return <Characters characters={characters} />
}

export const getStaticPaths = async () => {
  const { data } = await client.query({ query: GET_PAGE_INFO })

  const numberOfPages = data?.characters.info.pages + 1

  const arrayOfPages = [...Array(numberOfPages).keys()]

  const paths = arrayOfPages.map((page) => ({
    params: { page: `${page}` },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { page } }) => {
  const { data } = await client.query({
    query: GET_ALL_CHARACTERS,
    variables: { page: Number(page) },
  })

  return {
    props: {
      characters: data?.characters,
    },
  }
}

export default Page
