import { useQuery } from "react-query";
import { searchGifs } from "../api/giphy";
import { GiphyApiResponse } from "../types/GiphyTypes";

const useSearchGifs = (query: string, page: number) => {
    return useQuery<GiphyApiResponse, Error>(
        ['searchGifs', query, page],
        () => searchGifs(query || "", page),
        {
            keepPreviousData: true,
            staleTime: 5 * 60 * 1000,
            refetchOnWindowFocus: false,
            enabled: !!query,
        }
    );
};
export default useSearchGifs;