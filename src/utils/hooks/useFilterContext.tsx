import { currentFilterContext } from "../../contexts/FilterContext";
import { useContext } from "react"


const useFilterContext = () => useContext(currentFilterContext);

export default useFilterContext;