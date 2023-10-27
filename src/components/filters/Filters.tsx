
import { useEffect, useState } from "react";
import "./filters.css";
import useFilterContext from "../../utils/hooks/useFilterContext";

type Props = {
    languages: string[];
}

type OptionTypes = {
    value: string;
    label: string;
}

type SelectTypes = {
    filterType: string;
    options: OptionTypes[];
}



const Filters = ({ languages }: Props) => {

    const [selectVariations, setSelectVariations] = useState<SelectTypes[] | null>(null);
    const { changeTypeFilter, changeLanguageFilter, changeSortFilter } = useFilterContext();

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
            if (e.target.value === "last-updated") {
                changeSortFilter(null);
            } else {
                changeSortFilter(e.target.value);
            }
        }
    }


    useEffect(() => {

        const typeOptions: OptionTypes[] = [
            { value: "all", label: "All" },
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
        ];

        const languageOptions: OptionTypes[] = [
            { value: "all", label: "All" },
        ];

        languages.forEach((language) => {
            languageOptions.push({ value: language, label: language });
        });

        const sortOptions: OptionTypes[] = [
            { value: "last-updated", label: "Last Updated" },
            { value: "name", label: "Name" },
        ];

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