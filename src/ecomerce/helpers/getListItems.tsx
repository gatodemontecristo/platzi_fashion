

export const getListItems = async () => {
    const url = `https://api.escuelajs.co/api/v1/products`;
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const movie = await response.json();
        console.log("movie", movie);
        return movie;
    } catch (error) {
        console.error(error);
        return {};
    }
    
    
    
    

  };
  