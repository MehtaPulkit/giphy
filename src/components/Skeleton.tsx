import React from 'react';
import imgSkeleton from "../assets/ImageSkeleton.svg";

const Skeleton: React.FC = () => {
  return (
    <div
      role="status"
      className="max-w-sm p-2 border border-gray-200 rounded shadow animate-pulse mb-2 loading"
    >
      <div className="flex items-center justify-center h-56 w-56 mb-4 bg-gray-300 rounded">
        <img
          src={imgSkeleton}
          alt="Loading skeleton"
          className="w-10 h-10 text-gray-200"
        />
      </div>
      <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-2"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
