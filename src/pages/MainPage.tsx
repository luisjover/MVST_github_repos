
import "./mainpage.css";
import USER_DATA from "../graphql/queries/user.queries";
import { useQuery } from "@apollo/client";
import { Sidebar } from "../components/sidebar";
import { Content } from "../components/repositories";



const MainPage = () => {

    const { data, loading } = useQuery(USER_DATA)
    console.log(data, loading)

    return (

        <main className="main-container">
            <Sidebar data={data} />
            <Content />

        </main>

    )
}

export default MainPage;