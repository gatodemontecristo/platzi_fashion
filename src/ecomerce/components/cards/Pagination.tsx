import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

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
    <div className="flex flex-row pagination mt-14">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <ChevronLeftIcon className="h-6 w-6 fill-curren" />
      </button>
      {/*     <span>
        Page {currentPage} of {totalPages}
      </span> */}

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handleCurrentPage(index + 1)}
          className={`px-3 py-1 m-1 rounded-full	 ${
            currentPage === index + 1
              ? 'bg-slate-800	 text-white'
              : 'bg-gray-200'
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <ChevronRightIcon className="h-6 w-6 fill-curren" />
      </button>
    </div>
  );
};
