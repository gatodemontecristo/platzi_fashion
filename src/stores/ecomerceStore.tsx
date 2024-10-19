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
      setIsLoading: (value) => {
        set({ isLoading: value });
      },
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
  cleanItems: () => void;
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
      cleanItems: () => set({ shopCardOrder: [] }),
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

interface NumericObject {
  [key: string]: number;
}
export interface EcomerceStoreProps {
  totalResult: NumericObject;
  setTotalResult: (
    shopCardOrder: shopCardOrderItemProps[],
    option: string,
    payment: number,
  ) => void;
}
export const useEcomerceStore = create<EcomerceStoreProps>((set) => ({
  totalResult: {
    delivery: 0,
    discount: 0,
    totalexc: 0,
    tax: 0,
    order: 0,
    saving: 0,
  },
  setTotalResult: (shopCardOrder, option, payment) => {
    const totalexc = shopCardOrder.reduce(
      (sum, item) => sum + item.price * item.amount,
      0,
    );
    const delivery = option === 'option1' ? 11.2 : 0;
    let discount: number;
    switch (payment) {
      case 0:
        discount = 5.9;
        break;
      case 1:
        discount = 8.7;
        break;
      default:
        discount = 7.2;
    }
    const tax = totalexc * 0.18;
    const order = totalexc + delivery + discount + tax;
    const saving = order * 0.2;
    set({
      totalResult: {
        delivery,
        discount,
        totalexc,
        tax,
        order,
        saving,
      },
    });
  },
}));

export interface myOrdersProps {
  id: string;
  date: string;
  articles: number;
  total: number;
  shopOrderCollection: shopCardOrderItemProps[];
}
export interface useMyOrdersProps {
  orderList: myOrdersProps[];
  addOrderList: (order: myOrdersProps) => void;
  getOrderCollection: (id: string) => myOrdersProps | null;
}
export const useMyOrders = create(
  persist<useMyOrdersProps>(
    (set, get) => ({
      orderList: [],
      addOrderList: (order) => {
        set((state) => {
          return { orderList: [...state.orderList, order] };
        });
      },
      getOrderCollection: (id) => {
        return get().orderList.filter((order) => order.id === id)[0] || null;
      },
    }),
    {
      name: 'order-store',
    },
  ),
);

// Función para limpiar el almacenamiento
export const clearStore = () => {
  localStorage.removeItem('order-store'); // Elimina el key almacenado
  localStorage.removeItem('shopcar-store');
  localStorage.removeItem('filter-gallery');

  // También puedes hacer que Zustand reinicie el estado
  useMyOrders.persist.clearStorage();
  useShopCarStore.persist.clearStorage();
  useShopFilterStore.persist.clearStorage();
};
