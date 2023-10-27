
import "./filters.css";
import { useEffect, useState } from "react";
import useFilterContext from "../../utils/hooks/useFilterContext";

type Props = {
    languages: string[];
}

//Types for the select options
type OptionTypes = {
    value: string;
    label: string;
}

//Types for the select variations
type SelectTypes = {
    filterType: string;
    options: OptionTypes[];
}



const Filters = ({ languages }: Props) => {

    const [selectVariations, setSelectVariations] = useState<SelectTypes[] | null>(null);
    //Custom hook to get the filter context changer and set the filters states
    const { changeTypeFilter, changeLanguageFilter, changeSortFilter } = useFilterContext();

    //Function to handle the filter changes and mutate de context states
    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>, filterType: string) => {
        if (filterType === "Type") {
            if (e.target.value === "all") {
                changeTypeFilter(null);
            } else {
                changeTypeFilter(e.target.value);
            }
        } else if (filterType === "Languages") {
            if (e.target.value === "all") {
                changeLanguageFilter(null);
            } else {
                changeLanguageFilter(e.target.value);
            }

        } else {

            changeSortFilter(e.target.value);

        }
    }


    useEffect(() => {

        //Set the type select possible options
        const typeOptions: OptionTypes[] = [
            { value: "all", label: "All" },
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
        ];

        //Set the languages select default option
        const languageOptions: OptionTypes[] = [
            { value: "all", label: "All" },
        ];

        //Loop through the languages array and push the unique languages to the languages select options, geting an array with the different unique languages
        languages.forEach((language) => {
            languageOptions.push({ value: language, label: language });
        });

        //Set the sort select possible options
        const sortOptions: OptionTypes[] = [
            { value: "last-updated", label: "Last Updated" },
            { value: "name", label: "Name" },
        ];

        //Set the select variations state with the posibble options for each select
        setSelectVariations([
            { filterType: "Type", options: typeOptions },
            { filterType: "Languages", options: languageOptions },
            { filterType: "Sort", options: sortOptions },
        ]);

    }, [])


    return (
        <div className="search-filters">
            {selectVariations && selectVariations.map((selectVariation, index) => (
                <select
                    defaultValue={""}
                    key={index}
                    className="filter-select"
                    onChange={(e) => handleFilter(e, selectVariation.filterType)}
                >
                    <option value="" disabled>{selectVariation.filterType}</option>
                    {selectVariation.options.map((option, index) => (
                        <option
                            key={index}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            ))}
        </div>
    )
}

export default Filters;