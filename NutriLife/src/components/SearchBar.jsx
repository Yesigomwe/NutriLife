import { useState } from "react";
import { MantineProvider } from "@mantine/core";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <MantineProvider>
      <div>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          className="bg-white rounded-full px-40 my-8 py-3 border-solid border-2 border-orange"
          type="text"
          placeholder="search here"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
    </MantineProvider>
  );
};

export default SearchBar;
