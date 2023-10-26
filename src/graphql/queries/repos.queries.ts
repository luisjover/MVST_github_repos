
import { gql } from '@apollo/client';


const ALL_REPOS = gql`
query AllReposByUser($login: String!, $totalRepos: Int!) {
    user (login: $login) {
      repositories(last: $totalRepos) {
        nodes {
          name
          createdAt
          updatedAt
          description
          isPrivate
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
`

export default ALL_REPOS;