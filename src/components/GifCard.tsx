import React, { memo } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/24/solid";
import { useGifContext } from "../context/GifContext";

interface GifCardProps {
  gif: { id: string; url: string; title: string };
}

const GifCard: React.FC<GifCardProps> = ({ gif }) => {
  const { state, dispatch } = useGifContext();
  const isSaved = state.savedGifs.some((savedGif) => savedGif.id === gif.id);

  const handleSave = () => {
    if (isSaved) {
      dispatch({ type: "UNSAVE_GIF", payload: gif.id });
    } else {
      dispatch({ type: "SAVE_GIF", payload: gif });
    }
  };

  return (
    <div
      key={gif.id}
      className="relative p-2 border border-gray-500 rounded shadow-md .gif-card"
    >
      <img
        src={gif.url}
        alt={gif.title}
        className="h-auto object-contain transition-transform duration-300 hover:scale-105 m-auto mt-7"
      />
      <div className="mt-2 text-center mx-4">
        <p className="text-sm font-medium text-gray-50 truncate">{gif.title}</p>
      </div>

      <button
        className="absolute top-2 right-2  hover:text-gray-800"
        onClick={handleSave}
        title={isSaved ? "Unsave Gif" : "Save Gif"}
      >
        {isSaved ? (
          <FilledHeartIcon className="h-6 w-6 text-red-600" />
        ) : (
          <HeartIcon className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default memo(GifCard);
