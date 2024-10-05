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
  inputValue: string;
  setSearchValue: (searchValue: string) => void;
  setCategoryValue: (categoryValue: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setShopCollection: (shopCollection: CardProps[]) => void;
  setTotalSize: (totalSize: number) => void;
  setTotalPages: (totalPages: number) => void;
  setIsLoading: (isLoading: boolean) => void;
  setInputValue: (inputValue: string) => void;
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
      inputValue: '',
      setSearchValue: (value) => set({ searchValue: value }),
      setCategoryValue: (value) => set({ categoryValue: value }),
      setCurrentPage: (value) => set({ currentPage: value }),
      setShopCollection: (value) => set({ shopCollection: value }),
      setTotalSize: (value) => set({ totalSize: value }),
      setTotalPages: (value) => set({ totalPages: value }),
      setIsLoading: (value) => set({ isLoading: value }),
      setInputValue: (value) => set({ inputValue: value }),
      getListItems: async () => {
        get().setIsLoading(true);
        const categoryPage =
          get().categoryValue !== 0 ? `&categoryId=${get().categoryValue}` : '';
        const inputValueSearch =
          get().inputValue.length !== 0 ? `&title=${get().inputValue}` : '';
        const offset = (get().currentPage - 1) * get().productsPerPage;
        const url01 = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${get().productsPerPage}${categoryPage}${inputValueSearch}`;
        const url02 = `https://api.escuelajs.co/api/v1/products?${categoryPage}${inputValueSearch}`;
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

export interface shopCardOrderItemProps extends CardProps {
  amount: number;
}
export interface useShopCarStoreProps {
  shopCardOrder: shopCardOrderItemProps[];
  addItem: (product: CardProps) => void;
  removeItem: (id: number) => void;
  updateItem: (amount: number, id: number) => void;
}
export const useShopCarStore = create(
  persist<useShopCarStoreProps>(
    (set) => ({
      shopCardOrder: [],
      addItem: (product) => {
        set((state) => {
          const existingProduct = state.shopCardOrder.find(
            (item) => item.id === product.id,
          );
          if (existingProduct) {
            return {
              shopCardOrder: state.shopCardOrder.map((item) =>
                item.id === product.id
                  ? { ...item, amount: item.amount + 1 }
                  : item,
              ),
            };
          }
          return {
            shopCardOrder: [...state.shopCardOrder, { ...product, amount: 1 }],
          };
        });
      },
      removeItem: (id) => {
        set((state) => {
          return {
            shopCardOrder: state.shopCardOrder.filter((item) => item.id !== id),
          };
        });
      },
      updateItem: (amount, id) => {
        set((state) => {
          return {
            shopCardOrder: state.shopCardOrder.map((item) =>
              item.id === id ? { ...item, amount: amount } : item,
            ),
          };
        });
      },

      /*  const existingProductIndex = get().shopCardOrder.findIndex(
          (item) => item.id === product.id,
        );
        if (existingProductIndex !== -1) {
          get().shopCardOrder[existingProductIndex].amount += 1;
          return;
        }
        [...get().shopCardOrder, { ...product, quantity: 1 }];
        return;
      },*/
    }),
    {
      name: 'shopcar-store',
    },
  ),
);
export interface NavBarStoreProps {
  menuHeight: number;
  setMenuHeight: (height: number) => void;
}
export const useNavBarStore = create<NavBarStoreProps>((set) => ({
  menuHeight: 0,
  setMenuHeight: (height) => set({ menuHeight: height }),
}));
