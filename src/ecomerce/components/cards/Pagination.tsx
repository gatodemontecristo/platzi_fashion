interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handleCurrentPage: (page: number) => void;
}
export const Pagination = ({
  handlePrevPage,
  currentPage,
  totalPages,
  handleNextPage,
  handleCurrentPage,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handleCurrentPage(index + 1)}
          className={`px-3 py-1 m-1 ${
            currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};
