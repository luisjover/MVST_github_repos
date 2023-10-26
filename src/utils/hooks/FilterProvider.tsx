import { currentFilterContext } from "../../contexts/FilterContext";
import { useContext } from "react"


const useFilterContext = () => {
    return useContext(currentFilterContext)
}

export default useFilterContext;