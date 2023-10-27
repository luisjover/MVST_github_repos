import { useState, createContext } from "react"

type FilterContextType = {
    searchFilter: string | null,
    changeSearchFilter: (filterParam: string | null) => void,
    typeFilter: string | null,
    changeTypeFilter: (filterParam: string | null) => void,
    languageFilter: string | null,
    changeLanguageFilter: (filterParam: string | null) => void,
    sortFilter: string | null,
    changeSortFilter: (filterParam: string | null) => void,

}

export const currentFilterContext = createContext<FilterContextType>({
    searchFilter: null,
    changeSearchFilter: () => { },
    typeFilter: null,
    changeTypeFilter: () => { },
    languageFilter: null,
    changeLanguageFilter: () => { },
    sortFilter: null,
    changeSortFilter: () => { }
});


export function FilterProvider({ ...props }) {
    const [searchFilter, setSearchFilter] = useState<string | null>(null);
    const [typeFilter, setTypeFilter] = useState<string | null>(null);
    const [languageFilter, setLanguageFilter] = useState<string | null>(null);
    const [sortFilter, setSortFilter] = useState<string | null>(null);

    const changeSearchFilter = (filterParam: string | null) => {
        setSearchFilter(filterParam)
    };

    const changeTypeFilter = (filterParam: string | null) => {
        setTypeFilter(filterParam)
    };

    const changeLanguageFilter = (filterParam: string | null) => {
        setLanguageFilter(filterParam)
    };

    const changeSortFilter = (filterParam: string | null) => {
        setSortFilter(filterParam)
    };

    return (
        <currentFilterContext.Provider value={{ searchFilter, changeSearchFilter, typeFilter, changeTypeFilter, languageFilter, changeLanguageFilter, sortFilter, changeSortFilter }}>
            {props.children}
        </currentFilterContext.Provider>
    )
}