

export type SearchBarProps = {
  message: string;
}

const SearchBar = ({ message }: SearchBarProps) => {



  return (
    <div>{message}</div>
  )
}


export default SearchBar;