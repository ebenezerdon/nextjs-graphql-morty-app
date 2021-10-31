import { gql } from '@apollo/client'

const GET_ALL_CHARACTERS = gql`
    query Character($page: Int) {
        characters(page: $page) {
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

const GET_PAGE_INFO = gql`
    query Character {
        characters {
            info {
                pages
            }
        }
    }
`

export { GET_ALL_CHARACTERS, GET_PAGE_INFO }
