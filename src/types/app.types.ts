export interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
      rate: number;
      count: number;
  };
}
  export interface ProductProps {
    product: Product;
  }


export type CartProduct = Product & {    
  quantity: number;
};

export interface CartState {
  items: CartProduct[];
  total: number;
  totalItems: number;
}