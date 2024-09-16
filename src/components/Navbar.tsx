import React from 'react';
import { HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row gap-6 items-center justify-between md:justify-center">
      <SearchBar />
      <Link
        to="/saved"
        className="
          bg-purple-600 flex gap-1 p-3 rounded text-white 
          hover:bg-purple-800 transition-colors duration-200 ease-in-out"
      >
        <HeartIcon className="w-6 h-6" />
        <span className="hidden md:block">Saved</span>
      </Link>
    </nav>
  );
};

export default Navbar;
