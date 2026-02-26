export type Product = {
  id: number;
  title: string;
  price: number; 
  description: string;
  category: string;
  image: string;
  
};

export type Raring={

}

export type Envelope<T> = {
  result: T | null;
  errorMy: ErrorMy | null;
  timeGenerated: Date;  
}

type ErrorMy = {
  Code: string;
  Message: string;
}


