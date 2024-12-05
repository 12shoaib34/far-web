"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const RecruiterPagination = ({ totalPages, totalCount }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageClick = (page) => {
    if (page > 0 && page <= totalPages) {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      replace(`${pathname}?${params.toString()}`);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const delta = 3;

    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);

    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={` ${i === currentPage ? "far-btn tertiary" : "far-btn outline-gray"}`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex gap-2 items-center justify-center mt-8">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${currentPage === 1 ? "far-btn disabled" : "far-btn tertiary"}`}
      >
        Prev
      </button>

      {currentPage > 4 && (
        <>
          <button onClick={() => handlePageClick(1)} className="far-btn outline-gray">
            1
          </button>
          <span className="px-2">...</span>
        </>
      )}

      {renderPageNumbers()}

      {currentPage < totalPages - 3 && (
        <>
          <span className="px-2">...</span>
          <button onClick={() => handlePageClick(totalPages)} className="far-btn outline-gray">
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${currentPage === totalPages ? "far-btn disabled" : "far-btn tertiary"}`}
      >
        Next
      </button>
    </div>
  );
};

export default RecruiterPagination;
