import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/giphyLogo.svg";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className="py-4">
      <div className="flex flex-col gap-4 md:flex-row justify-between">
        <Link to="/">
          <h1
            className="
              text-4xl font-extrabold tracking-tight leading-none 
              drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] 
              text-white md:text-5xl lg:text-4xl flex gap-1"
          >
            <img src={logo} alt="Giphy logo" className="w-6" />
            Giphy
          </h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
