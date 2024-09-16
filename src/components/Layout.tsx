import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout:React.FC = () => {
  return (
    <div className="bg-gray-900 h-auto min-h-screen">
      <div className="max-w-screen-lg m-auto px-2">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
