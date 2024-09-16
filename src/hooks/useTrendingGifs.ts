import { useQuery } from "react-query";
import { fetchTrendingGifs } from "../api/giphy";
import { GiphyApiResponse } from "../types/GiphyTypes";

const useTrendingGifs = (page: number) => {
    return useQuery<GiphyApiResponse, Error>(
        ['trendingGifs', page],
        () => fetchTrendingGifs(page),
        {
            keepPreviousData: true,
            staleTime: 5 * 60 * 1000,
            refetchOnWindowFocus: false,
        }
    );
};
export default useTrendingGifs;
