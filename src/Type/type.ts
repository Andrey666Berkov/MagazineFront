export type Product = {
  id: number;
  title: string;
  price: number; 
  description: string;
  category: string;
  image: string; 
};

export type Envelope<T> = {
  Result: T | null;
  ErrorMy: ErrorMy | null;
  TimeGenerated: Date;  
}

type ErrorMy = {
  Code: string;
  Message: string;
}


