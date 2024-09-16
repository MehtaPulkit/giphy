import React from "react";
import { useGifContext } from "../context/GifContext";
import GifCard from "../components/GifCard";
import ErrorComponent from "../components/ErrorComponent";

const SavedPage: React.FC = () => {
  const { state } = useGifContext();

  return (
    <main>
      <h2 className="m-2 text-xl text-white">Your saved gifs</h2>
      {state.savedGifs.length === 0 ? (
        <ErrorComponent>No saved GIFs yet.</ErrorComponent>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {state.savedGifs.map((gif) => (
            <GifCard gif={gif} key={gif.id} />
          ))}
        </div>
      )}
    </main>
  );
};

export default SavedPage;
