
import "./mainpage.css";
import { Sidebar } from "../components/sidebar";
import { Content } from "../components/repositories";
import { FilterProvider } from "../contexts/FilterContext";
import { useLazyQuery } from "@apollo/client";
import USER_DATA from "../graphql/queries/user.queries";
import DotLoader from "react-spinners/DotLoader";
import UserData from "../types/userData";
import { useEffect, useState } from "react";

const MainPage = () => {

    const [getUserData, result] = useLazyQuery(USER_DATA);
    const [userData, setUserData] = useState<UserData | null>(null);


    useEffect(() => {
        getUserData({
            variables: {
                login: "luisjover",
            },
        });

    }, [])

    useEffect(() => {
        if (result && result.data) {
            setUserData(result.data.user);
        }
    }, [result])


    return (

        <main className="main-container">
            {userData
                ? <>
                    <Sidebar user={userData} />
                    <FilterProvider>
                        <Content totalRepos={userData.repositories.totalCount} />
                    </FilterProvider>
                </>
                : <DotLoader color="#c68112" />}
        </main>

    )
}

export default MainPage;