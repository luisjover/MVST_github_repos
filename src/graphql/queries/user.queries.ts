
import { gql } from '@apollo/client';


const USER_DATA = gql`
query USER_DATA {
  viewer {
    name
    login
    avatarUrl
    bio
    followers {
      totalCount
    }
    following {
      totalCount
    }
    repositories(last: 20) {
      nodes {
        name
        createdAt
        updatedAt
        description
        isPrivate
        owner {
          login
        }
        languages(last: 4) {
          nodes {
            name
          }
        }
      }
    }
  }
}
`

export default USER_DATA;