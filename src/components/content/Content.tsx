
import "./content.css";
import { List } from "../repositories";
import SearchBar from "../searchBar/SearchBar"
import { useLazyQuery, useQuery } from "@apollo/client";
import DotLoader from "react-spinners/DotLoader";
import ALL_REPOS from "../../graphql/queries/repos.queries";
import { useEffect, useState } from "react";
import RepoData from "../../types/repoData";
import Filters from "../filters/Filters";




type Props = {
    totalRepos: number | undefined
}




const Content = ({ totalRepos }: Props) => {

    const [reposData, setReposData] = useState<RepoData[] | null>(null);
    const [uniqueLanguages, setUniqueLanguages] = useState<string[] | null>(null);
    const [getReposData, result] = useLazyQuery(ALL_REPOS);

    useEffect(() => {
        getReposData({
            variables: {
                login: "luisjover",
                totalRepos: totalRepos,
            },
        })
    }, []);

    useEffect(() => {
        if (result && result.data) {
            const uniqueLanguagesArray: string[] = [];
            const allRepositories: RepoData[] = result.data.user.repositories.nodes;
            setReposData(allRepositories);
            allRepositories.forEach((repo) => {
                const primaryLanguage = repo.primaryLanguage?.name;
                if (primaryLanguage) {
                    if (!uniqueLanguagesArray.includes(primaryLanguage)) {
                        uniqueLanguagesArray.push(primaryLanguage);
                    }
                }
            });

            setUniqueLanguages(uniqueLanguagesArray);
        }
    }, [result]);

    return (
        <div className="content-container">
            {uniqueLanguages
                ? <div className="search-container">
                    <SearchBar type="Default" />
                    <Filters languages={uniqueLanguages} />
                </div>
                : <DotLoader color="#c68112" />}
            {reposData
                ? <div className="list-container">
                    <List repositories={reposData} />
                </div>
                : <DotLoader color="#c68112" />}
        </div>
    )
}

export default Content