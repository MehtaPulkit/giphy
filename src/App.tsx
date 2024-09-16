import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";  // Import React Query
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";
import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import TrendingGifPage from "./pages/TrendingGifPage";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TrendingGifPage />} />
            <Route path="search/:query" element={<SearchPage />} />
            <Route path="saved" element={<SavedPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
