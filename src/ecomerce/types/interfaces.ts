
export interface CollectionResponseProps {
    title: string;
    price: number;
    description: string;
    id: string;
    images: string[];
    category: {
        [key: string]: string; 
      };
}

export interface CardProps {
    title: string;
    price: number;
    description: string;
    id: string;
    image: string;
    category:string;
}