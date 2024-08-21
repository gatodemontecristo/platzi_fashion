

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
        const platziCards = await response.json();
        console.log("movie", platziCards);
        return platziCards;
    } catch (error) {
        console.error(error);
        return {};
    }
    
    
    
    

  };
  