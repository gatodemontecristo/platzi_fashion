import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ShopFilterStoreProps {
  searchValue: string;
  categoryValue: string;
  setSearchValue: (searchValue: string) => void;
  setCategoryValue: (categoryValue: string) => void;
}

export const useShopFilterStore = create(
  persist<ShopFilterStoreProps>(
    (set) => ({
      searchValue: '',
      categoryValue: '',
      setSearchValue: (value) => set({ searchValue: value }),
      setCategoryValue: (value) => set({ categoryValue: value }),
    }),
    {
      name: 'filter-gallery',
    },
  ),
);
