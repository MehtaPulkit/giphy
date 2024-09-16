import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      navigate(`/search/${searchText}`);
      setSearchText("");
    }
  };

  return (
    <div className="md:mx-auto my-1 float-end md:min-w-96">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Gifs..."
          value={searchText}
          onChange={handleChange}
        />
        <button
          className="
            text-white absolute end-1 bottom-1 bg-blue-700 
            hover:bg-blue-800 focus:ring-4 focus:outline-none 
            focus:ring-blue-300 font-medium rounded-lg text-sm 
            px-4 py-2 transition-colors duration-200 ease-in-out"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
