
import "./searchbar.css";
import useFilterContext from "../../utils/hooks/useFilterContext";


export type SearchBarProps = {
  type: string,
}

const SearchBar = (props: SearchBarProps) => {

  const { searchFilter, changeSearchFilter } = useFilterContext();

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