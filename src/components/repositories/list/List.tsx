
import { useEffect, useState } from "react";
import RepoData from "../../../types/repoData";
import useFilterContext from "../../../utils/hooks/useFilterContext";
import Card from "../card/Card";


type Props = {
    repositories: RepoData[];
}


const List = ({ repositories }: Props) => {

    const [filteredRepos, setFilteredRepos] = useState<RepoData[] | null>(null);
    const { searchFilter, typeFilter, languageFilter, sortFilter } = useFilterContext();



    useEffect(() => {


        let partialFiltered = repositories;

        // Filter by SearchParams on Searchbar
        if (searchFilter) {
            partialFiltered = partialFiltered.filter(repo => repo.name.toLowerCase().includes(searchFilter.toLowerCase()));
        }

        // Filter by type on Type Select
        if (typeFilter === "public") {
            partialFiltered = partialFiltered.filter(repo => repo.isPrivate === false);

        } else if (typeFilter === "private") {
            partialFiltered = partialFiltered.filter(repo => repo.isPrivate === true);

        }

        // Filter by language on Language Select
        if (languageFilter) {
            partialFiltered = partialFiltered.filter(repo => repo.primaryLanguage?.name === languageFilter);
        }

        // Sort by last updated or name on Sort Select
        if (sortFilter === "last-updated") {
            partialFiltered = partialFiltered.sort((a, b) => {
                if (a.updatedAt < b.updatedAt) {
                    return 1;
                } else if (a.updatedAt > b.updatedAt) {
                    return -1;
                } else {
                    return 0;
                }
            })
        } else if (sortFilter === "name") {
            partialFiltered = partialFiltered.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;
                }
            })
        }

        setFilteredRepos(partialFiltered);

    }, [searchFilter, typeFilter, languageFilter, sortFilter])

    return (
        <>
            {filteredRepos?.map((repo, index) => (
                <Card key={index} repo={repo} />
            ))}
        </>
    )
}

export default List;