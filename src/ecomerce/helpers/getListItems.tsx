import { CollectionResponseProps } from "../types";

export const getListItems = async ({offset,productsPerPage}:{offset:number,productsPerPage:number}) => {
  const url = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${productsPerPage}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const results = await response.json();
    console.log("results", results);
    const platziCards = results.map(
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
    return platziCards;
  } catch (error) {
    console.error(error);
    return {};
  }
};
