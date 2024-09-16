import React from 'react';
import { Link } from "react-router-dom";

const NotFoundPage:React.FC = () => {
  return (
    <main className="p-4 bg-gray-800 h-screen pt-24">
      <div className="text-center">
        <p className="text-base font-semibold text-blue-100">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-50">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
