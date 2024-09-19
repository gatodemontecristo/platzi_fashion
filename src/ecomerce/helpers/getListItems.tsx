import { CollectionResponseProps } from "../types";

export const getListItems = async ({offset,productsPerPage}:{offset:number,productsPerPage:number}) => {
  const url01 = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${productsPerPage}`;
  const url02 = `https://api.escuelajs.co/api/v1/products`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  try {

    const [response1, response2] = await Promise.all([
      fetch(url01, options), // URL de la primera API
      fetch(url02, options) // URL de la segunda API
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
      }: CollectionResponseProps) => ({
        title,
        price,
        description,
        id,
        image: images[0] || "",
      })
    );

    // const platziCards = dataMap.map((product:CollectionResponseProps) => ({
    //     title: product.title,
    //     price: product.price,
    //     description: product.description,
    //     id: product.id,
    //     image: product.category?.image || '',
    // }));

    console.log("movie", platziCards);
    return {platziCards,sizePage}
  } catch (error) {
    console.error(error); 
    return {};
  }
};
