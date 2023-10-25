import { useEffect } from "react";
const { VITE_GITHUB_TOKEN: token } = import.meta.env;


function App() {

  useEffect(() => {

    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
        query {
          viewer {
            name
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
      })

    })
      .then(res => res.json())
      .then(data => console.log(data))

  }, [])


  return (

    <div>App</div>

  )
}

export default App
