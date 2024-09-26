import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CardProps, CollectionResponseProps } from '../ecomerce/types';

export interface ShopFilterStoreProps {
  searchValue: string;
  categoryValue: number;
  currentPage: number;
  productsPerPage: number;
  shopCollection: CardProps[];
  totalSize: number;
  totalPages: number;
  isLoading: boolean;
  setSearchValue: (searchValue: string) => void;
  setCategoryValue: (categoryValue: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setShopCollection: (shopCollection: CardProps[]) => void;
  setTotalSize: (totalSize: number) => void;
  setTotalPages: (totalPages: number) => void;
  setIsLoading: (isLoading: boolean) => void;
  getListItems: () => Promise<void>;
}

export const useShopFilterStore = create(
  persist<ShopFilterStoreProps>(
    (set, get) => ({
      searchValue: '',
      categoryValue: 0,
      currentPage: 1,
      productsPerPage: 12,
      shopCollection: [],
      totalSize: 0,
      totalPages: 0,
      isLoading: false,
      setSearchValue: (value) => set({ searchValue: value }),
      setCategoryValue: (value) => set({ categoryValue: value }),
      setCurrentPage: (value) => set({ currentPage: value }),
      setShopCollection: (value) => set({ shopCollection: value }),
      setTotalSize: (value) => set({ totalSize: value }),
      setTotalPages: (value) => set({ totalPages: value }),
      setIsLoading: (value) => set({ isLoading: value }),
      getListItems: async () => {
        get().setIsLoading(true);
        const categoryPage =
          get().categoryValue !== 0 ? `&categoryId=${get().categoryValue}` : '';
        const offset = (get().currentPage - 1) * get().productsPerPage;
        const url01 = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${get().productsPerPage}${categoryPage}`;
        const url02 = `https://api.escuelajs.co/api/v1/products${categoryPage && '?' + categoryPage}`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        };

        try {
          const [response1, response2] = await Promise.all([
            fetch(url01, options), // URL de la primera API
            fetch(url02, options), // URL de la segunda API
          ]);

          const resultsPage = await response1.json();
          const resultsSize = await response2.json();
          const sizePage = resultsSize.length;
          const platziCards = resultsPage.map(
            ({
              title,
              price,
              description,
              id,
              images,
              category,
            }: CollectionResponseProps) => ({
              title,
              price,
              description,
              id,
              image: images[0] || '',
              category: category.name || '',
            }),
          );

          console.log('movie', platziCards);
          const totalPages = Math.ceil(sizePage / get().productsPerPage);
          get().setShopCollection(platziCards);
          get().setTotalSize(sizePage);
          get().setTotalPages(totalPages);
          get().setIsLoading(false);
        } catch (error) {
          get().setShopCollection([]);
          get().setCurrentPage(1);
          get().setTotalSize(0);
          get().setTotalPages(1);
          get().setIsLoading(false);
        }
      },
    }),
    {
      name: 'filter-gallery',
    },
  ),
);
