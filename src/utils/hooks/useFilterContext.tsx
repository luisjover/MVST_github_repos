import { currentFilterContext } from "../../contexts/FilterContext";
import { useContext } from "react"

// Custom hook to easily access and use the filter context
const useFilterContext = () => useContext(currentFilterContext);

export default useFilterContext;