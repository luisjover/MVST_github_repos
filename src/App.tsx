
import USER_DATA from "./graphql/queries/user.queries";
import { useQuery } from "@apollo/client";
import MainPage from "./pages/MainPage";


function App() {

  const { data, loading } = useQuery(USER_DATA)
  console.log(data, loading)


  return (

    <MainPage />

  )
}

export default App
