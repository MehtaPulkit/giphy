import { render, screen } from "@testing-library/react";
import useTrendingGifs from "../hooks/useTrendingGifs";
import { GifProvider } from "../context/GifContext";
import TrendingGifPage from "../pages/TrendingGifPage";

jest.mock("../hooks/useTrendingGifs");
const mockUseTrendingGifs = useTrendingGifs as jest.MockedFunction<
  typeof useTrendingGifs
>;

describe("TrendingGifPage", () => {
  test("renders trending GIFs and pagination", () => {
    mockUseTrendingGifs.mockReturnValue({
      data: {
        data: [
          {
            id: "1",
            images: {
              fixed_height_downsampled: {
                webp: "https://example.com/gif1.webp",
              },
            },
            title: "GIF 1",
          },
          {
            id: "2",
            images: {
              fixed_height_downsampled: {
                webp: "https://example.com/gif2.webp",
              },
            },
            title: "GIF 2",
          },
        ],
        pagination: {
          total_count: 10,
        },
      },
      isLoading: false,
      error: null,
    });
    render(
      <GifProvider>
        <TrendingGifPage />
      </GifProvider>
    );
    expect(
      screen.getByRole("heading", { name: /Trending GIFs/i })
    ).toBeInTheDocument();

    const gifCards = screen.getAllByRole("img", { name: /gif/i });
    expect(gifCards.length).toBe(2); 

    const pagination = screen.getByRole("button", { name: /Next/i });
    expect(pagination).toBeInTheDocument();
  });

  test("renders loading state", async () => {
    mockUseTrendingGifs.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });
    render(
      <GifProvider>
        <TrendingGifPage />
      </GifProvider>
    );

    const loaders = await screen.findAllByAltText(/Loading skeleton/i);
    expect(loaders).toHaveLength(12);
  });

  test("renders error state", async () => {
    mockUseTrendingGifs.mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error("Failed to load GIFs"),
    });

    render(
      <GifProvider>
        <TrendingGifPage />
      </GifProvider>
    );

    expect(await screen.findByText(/Failed to load GIFs/i)).toBeInTheDocument();
  });
});
