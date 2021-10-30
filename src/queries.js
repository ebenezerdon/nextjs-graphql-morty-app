import { gql } from '@apollo/client'

const GET_ALL_CHARACTERS = gql`
  query Character {
    characters {
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
  }
}`

export { GET_ALL_CHARACTERS }
