
import "./searchbar.css";
import useFilterContext from "../../utils/hooks/FilterProvider";


export type SearchBarProps = {
  type: string,
}

const SearchBar = (props: SearchBarProps) => {

  const { currentFilter, changeFilter } = useFilterContext();




  return (

    <input
      className="search-input"
      type="text"
      placeholder="Search..."
      value={currentFilter}
      onChange={(e) => changeFilter(e.target.value)}
    />

  )
}


export default SearchBar;