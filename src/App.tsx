
import USER_DATA from "./graphql/queries/user.queries";
import { useQuery } from "@apollo/client";


function App() {

  const result = useQuery(USER_DATA)
  console.log(result)


  return (

    <div>App</div>

  )
}

export default App
