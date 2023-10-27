
import { useEffect, useState } from "react";
import "./filters.css";

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


    useEffect(() => {

        const typeOptions: OptionTypes[] = [
            { value: "all", label: "All" },
            { value: "public", label: "Public" },
            { value: "private", label: "Private" },
            { value: "owner", label: "Owner" },
            { value: "contributor", label: "Contributor" },
        ];

        const languageOptions: OptionTypes[] = [
            { value: "all", label: "All" },
        ];

        languages.forEach((language) => {
            languageOptions.push({ value: language, label: language });
        });

        const sortOptions: OptionTypes[] = [
            { value: "last-updated", label: "Last updated" },
            { value: "name", label: "Name" },
        ];

        setSelectVariations([
            { filterType: "Type", options: typeOptions },
            { filterType: "Language", options: languageOptions },
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