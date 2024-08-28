import { useEffect, useState } from "react";
import { getListItems } from "../helpers";
import { CardProps } from "../types";

export const useFetchMovieDetail = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(200);
  const productsPerPage = 12;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const offset = (currentPage - 1) * productsPerPage;
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  useEffect(() => {
    setTotalProducts(200); 
  }, []);

  const [shopCollection, setShopCollection] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDetails = async () => {
    setIsLoading(true);
    const newCollection = await getListItems({ offset, productsPerPage });
    setShopCollection(newCollection);
    setIsLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, [currentPage]);

  return {
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
    shopCollection,
    isLoading,
  };
};
