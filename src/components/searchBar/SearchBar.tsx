
import "./searchbar.css";
import useFilterContext from "../../utils/hooks/useFilterContext";


export type SearchBarProps = {
  type: string,
}

const SearchBar = (props: SearchBarProps) => {

  //Custom hook to get the needed filter context states to use the searchbar
  const { searchFilter, changeSearchFilter } = useFilterContext();

  //Function to handle the search filter changes and mutate the context state
  const handleSearchFilterChange = (searchParam: string) => {
    if (searchParam === "") {
      changeSearchFilter(null);
    } else {
      changeSearchFilter(searchParam);
    }
  }



  return (

    <input
      className="search-input"
      type="text"
      placeholder="Search..."
      value={searchFilter ? searchFilter : ""}
      onChange={(e) => handleSearchFilterChange(e.target.value)}
    />

  )
}


export default SearchBar;