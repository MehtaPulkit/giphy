import { render, screen } from "@testing-library/react";
import useSearchGifs from "../hooks/useSearchGifs";
import { GifProvider } from "../context/GifContext";
import SearchPage from "../pages/SearchPage";


jest.mock("../hooks/useSearchGifs"); 
const mockUseSearchGifs = useSearchGifs as jest.MockedFunction<
  typeof useSearchGifs
>;

describe("SearchPage", () => {
  test("renders trending GIFs and pagination", () => {
    mockUseSearchGifs.mockReturnValue({
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
        <SearchPage />
      </GifProvider>
    );

    expect(
      screen.getByRole("heading", { name: /Search Results/i })
    ).toBeInTheDocument();

    const gifCards = screen.getAllByRole("img", { name: /gif/i });
    expect(gifCards.length).toBe(2); 

    const pagination = screen.getByRole("button", { name: /Next/i });
    expect(pagination).toBeInTheDocument();
  });

  test("renders loading state", async () => {
    mockUseSearchGifs.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });
    render( <GifProvider>
        <SearchPage />
      </GifProvider>);

    const loaders = await screen.findAllByAltText(/Loading skeleton/i);
    expect(loaders).toHaveLength(12);
  });

  test("renders error state", async () => {
    mockUseSearchGifs.mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error("Failed to load GIFs"),
    });

    render( <GifProvider>
        <SearchPage />
      </GifProvider>);

    expect(await screen.findByText(/Failed to load GIFs/i)).toBeInTheDocument();
  });
});
