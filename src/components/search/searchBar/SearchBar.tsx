
import "./searchbar.css";
import { useState } from "react";


export type SearchBarProps = {
  type: string;
}

const SearchBar = (props: SearchBarProps) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [typeOptions, setTypeOptions] = useState([
    { value: 'all', label: 'All' },
    { value: 'public', label: 'Public' },
    { value: 'private', label: 'Private' },
    { value: 'created-by-me', label: 'Created by Me' },
    { value: 'collaborator', label: 'Collaborator' },
  ]);

  const [languageOptions, setLanguageOptions] = useState([
    { value: 'all', label: 'All' },
  ]);

  const [sortOptions, setSortOptions] = useState([
    { value: 'last-updated', label: 'Last Updated' },
    { value: 'name', label: 'Name' },
  ]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <select name="type" id="type">
          <option value="" disabled={true} selected={true}>
            Select type
          </option>
          {typeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select name="language" id="language">
          <option value="" disabled={true} selected={true}>
            Language
          </option>
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select name="sort" id="sort">
          <option value="" disabled={true} selected={true}>
            Sort
          </option>
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>

  )
}


export default SearchBar;