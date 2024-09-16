import React from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination mt-4 flex flex-col items-center">
      <div className="flex items-center mb-2">
        <button
          className={`
            flex items-center justify-center px-4 h-10 text-base font-medium
            border-0 rounded-s bg-gray-800 text-gray-400 hover:bg-gray-700 
            hover:text-white mr-2 ${
              currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
            }
          `}
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ArrowLongLeftIcon className="w-6 h-6 me-1" />
          <p className="hidden md:block">Prev</p>
        </button>

        <span className="mr-2 text-sm text-gray-400">Page:</span>
        <select
          aria-label="Select page"
          value={currentPage}
          onChange={(e) => handlePageChange(parseInt(e.target.value, 10))}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNum) => (
              <option key={pageNum} value={pageNum}>
                {pageNum}
              </option>
            )
          )}
        </select>
        <span className="ml-2 mr-2 text-sm text-gray-400">of {totalPages}</span>

        <button
          className={`
            flex items-center justify-center px-4 h-10 text-base font-medium
            border-0 rounded-e bg-gray-800 text-gray-400 hover:bg-gray-700 
            hover:text-white ${
              currentPage === totalPages
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }
          `}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <p className="hidden md:block">Next</p>
          <ArrowLongRightIcon className="w-6 h-6 ms-1" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
