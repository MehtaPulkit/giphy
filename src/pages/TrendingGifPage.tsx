import React, { useState } from "react";
import useTrendingGifs from "../hooks/useTrendingGifs";
import { GIFS_PER_PAGE } from "../api/giphy";
import GifList from "../components/GifList";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

const TrendingGifPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useTrendingGifs(page);

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
      title={
        <>
          <ArrowTrendingUpIcon className="w-4 inline-block mr-1" />
          Trending GIFs
        </>
      }
      gifs={gifs}
      isLoading={isLoading}
      error={error}
      currentPage={page}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  );
};

export default TrendingGifPage;
