import { useEffect, useState } from 'react';
import { getListItems } from '../helpers';
import { CardProps } from '../types';

export const useFetchMovieDetail = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState<number | undefined>();
  const [totalProducts, setTotalProducts] = useState(0);
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

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const handleCurrentCategory = (category: number | undefined) => {
    console.log(category);
    setCurrentCategory(category);
  };

  const [shopCollection, setShopCollection] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDetails = async () => {
    setIsLoading(true);
    const params = {
      offset,
      productsPerPage,
      currentCategory,
    };
    console.log(params);
    const { platziCards, sizePage } = await getListItems(params);
    setShopCollection(platziCards);
    setIsLoading(false);
    setTotalProducts(sizePage);
  };

  useEffect(() => {
    getDetails();
  }, [currentPage, currentCategory]);

  return {
    currentPage,
    totalPages,
    handleNextPage,
    handlePrevPage,
    handleCurrentPage,
    shopCollection,
    isLoading,
    handleCurrentCategory,
  };
};
