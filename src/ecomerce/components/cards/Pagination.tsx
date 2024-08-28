
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    handleNextPage: () => void;
    handlePrevPage: () => void;
}
export const Pagination = ({handlePrevPage,currentPage,totalPages,handleNextPage}:PaginationProps) => {
  return (
    <div className="pagination">
    <button onClick={handlePrevPage} disabled={currentPage === 1}>
      Previous
    </button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
  )
}
