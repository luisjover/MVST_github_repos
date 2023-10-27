
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


        let partialFiltered = [...repositories];

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
        if (sortFilter === "name") {
            partialFiltered.sort((a, b) => a.name.localeCompare(b.name));
            console.log(partialFiltered);
        } else if (sortFilter === "last-updated") {
            partialFiltered.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
            console.log(partialFiltered);

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