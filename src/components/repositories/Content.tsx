import List from "./list/List"
import SearchBar from "../search/searchBar/SearchBar"


type Props = {}

const Content = (props: Props) => {
    return (
        <>
            <SearchBar type="Default" />
            <List />
        </>
    )
}

export default Content