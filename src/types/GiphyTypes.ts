export interface Gif {
  id: string;
  title: string;
  images: {
    fixed_height_downsampled: {
      webp: string;
    };
  };
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface GiphyApiResponse {
  data: Gif[] | null;
  pagination: Pagination | null;
}

export interface GifResponse {
  id: string;
  url: string;
  title: string;
}