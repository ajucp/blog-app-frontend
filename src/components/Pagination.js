import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-8">
      <button
        className="bg-yellow-500 text-black px-4 py-2 rounded-lg mr-2"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span className="text-yellow-500 px-4">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="bg-yellow-500 text-black px-4 py-2 rounded-lg ml-2"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
