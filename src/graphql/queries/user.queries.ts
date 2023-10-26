
import { gql } from '@apollo/client';


const USER_DATA = gql`
query UserDataByLogin($login: String!) {
  user (login: $login) {
    name
    avatarUrl
    bio
    followers {
      totalCount
    }
    following {
      totalCount
    }
    repositories {
      totalCount
    }
    
  }
} 
`

export default USER_DATA;