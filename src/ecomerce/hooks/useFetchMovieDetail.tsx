import { useEffect, useState } from "react";
import { getListItems } from "../helpers";


export const useFetchMovieDetail = () => {
    const [movie, setmovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getDetails = async () => {
        const newMovie = await getListItems();
        setmovie(newMovie);
        setIsLoading(false);
      };

      useEffect(() => {
        getDetails();
      }, []);

      return {
        movie,
        isLoading
      }

}