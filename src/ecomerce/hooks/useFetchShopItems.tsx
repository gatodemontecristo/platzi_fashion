import { useEffect, useState } from "react";
import { getListItems } from "../helpers";


export const useFetchMovieDetail = () => {
    const [shopCollection, setShopCollection] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getDetails = async () => {
        const newCollection = await getListItems();
        setShopCollection(newCollection);
        setIsLoading(false);
      };

      useEffect(() => {
        getDetails();
      }, []);

      return {
        shopCollection,
        isLoading
      }

}