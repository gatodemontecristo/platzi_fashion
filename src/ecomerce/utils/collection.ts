export interface menuNavItemsProps {
  tittle: string;
  category: number;
}

export const menuNavItems: menuNavItemsProps[] = [
  { tittle: 'All', category: 0 },
  { tittle: 'Electronics', category: 2 },
  { tittle: 'Furniture', category: 3 },
  { tittle: 'Shoes', category: 4 },
  { tittle: 'Miscellaneous', category: 5 },
  { tittle: 'Other', category: 1 },
];
