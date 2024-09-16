import axios, { AxiosResponse } from 'axios';
import { GiphyApiResponse } from '../types/GiphyTypes';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
export const BASE_URL = 'https://api.giphy.com/v1/gifs';

export const GIFS_PER_PAGE = 20;

interface FetchGifsParams {
  limit: number;
  offset: number;
  [key: string]: string | number | undefined;
}

export const fetchGifs = async (endpoint: string, params: FetchGifsParams): Promise<GiphyApiResponse> => {
  try {
    const response: AxiosResponse<GiphyApiResponse> = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: { api_key:API_KEY, ...params },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    throw new Error('Failed to fetch GIFs');
  }
};

const calculateOffset = (page: number) => (page - 1) * GIFS_PER_PAGE;

export const fetchTrendingGifs = (page: number): Promise<GiphyApiResponse> => {
  const offset = calculateOffset(page);
  return fetchGifs('trending', { limit: GIFS_PER_PAGE, offset });
};

export const searchGifs = (query: string, page: number): Promise<GiphyApiResponse> => {
  const offset = calculateOffset(page);
  return fetchGifs('search', { q: query, limit: GIFS_PER_PAGE, offset });
};
