import { useCallback, useState } from "react";

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState("");

  const handleSerachQuery = useCallback(
    (e) => {
      setQuery(e.target.value);
      onSearch(e.target.value);
    },
    [onSearch]
  );
  return (
    <div>
      <input value={query} onChange={handleSerachQuery} />
    </div>
  );
};

export default SearchBar;
