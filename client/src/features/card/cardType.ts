export interface ICardState {
  products: ICardProduct[];
  total_price: number;
  products_amount: number;
}

export interface ICardProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  qty: number;
}
