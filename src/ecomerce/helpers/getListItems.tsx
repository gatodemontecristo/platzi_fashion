import { CollectionResponseProps } from '../types';

export const getListItems = async ({
  offset,
  productsPerPage,
  currentCategory,
}: {
  offset: number;
  productsPerPage: number;
  currentCategory?: number;
}) => {
  console.log('Category', currentCategory);
  const categoryPage = currentCategory ? `&categoryId=${currentCategory}` : '';
  const url01 = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${productsPerPage}${categoryPage}`;
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
    return { platziCards, sizePage };
  } catch (error) {
    console.error(error);
    return {};
  }
};
