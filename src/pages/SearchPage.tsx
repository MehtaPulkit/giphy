import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GIFS_PER_PAGE } from "../api/giphy";
import useSearchGifs from "../hooks/useSearchGifs";
import GifList from "../components/GifList";

const SearchPage: React.FC = () => {
  const { query } = useParams();
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading } = useSearchGifs(query || "", page);

  const gifs =
    data?.data?.map((gif) => ({
      id: gif.id,
      url: gif.images.fixed_height_downsampled.webp,
      title: gif.title,
    })) || [];

  const totalPages = Math.ceil(
    (data?.pagination?.total_count || 0) / GIFS_PER_PAGE
  );

  return (
    <GifList
      title={`Search Results: ${query}`}
      gifs={gifs}
      isLoading={isLoading}
      error={error}
      currentPage={page}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  );
};

export default SearchPage;
