import React from "react";
import SkeletonLoader from "../components/SkeletonLoader";
import GifCard from "../components/GifCard";
import Pagination from "../components/Pagination";
import ErrorComponent from "../components/ErrorComponent";
import { GifResponse } from "../types/GiphyTypes";

interface GifListProps {
  title: React.ReactNode; // Changed from string to React.ReactNode
  gifs: GifResponse[];
  isLoading: boolean;
  error: Error | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const GifList: React.FC<GifListProps> = ({
  title,
  gifs,
  isLoading,
  error,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return <ErrorComponent>Error: {error.message}</ErrorComponent>;
  }

  return (
    <main>
      <h2 className="m-2 text-xl text-white">{title}</h2>

      {gifs.length === 0 ? (
        <ErrorComponent>No GIFs available.</ErrorComponent>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gifs.map((gif) => (
              <GifCard gif={gif} key={gif.id} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </main>
  );
};

export default GifList;
