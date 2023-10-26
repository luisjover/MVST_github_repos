import { useState, createContext } from "react"



export const currentFilterContext = createContext<{ currentFilter: string, changeFilter: (filterParam: string) => void }>({
    currentFilter: "",
    changeFilter: () => { }
});


export function FilterProvider({ ...props }) {
    const [currentFilter, setCurrentFilter] = useState("");

    const changeFilter = (filterParam: string) => {
        setCurrentFilter(filterParam)
    }

    return (
        <currentFilterContext.Provider value={{ currentFilter, changeFilter }}>
            {props.children}
        </currentFilterContext.Provider>
    )
}